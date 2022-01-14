import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import * as errors from 'grpc-errors';
import { AuthServiceService } from '../proto/auth_grpc_pb';
import { AuthRequest, AuthResponse } from '../proto/auth_pb';
import joi from 'joi';

type IUser = {
	email: string;
	password: string;
}

const users: Array<IUser> = [{
	email: 'something@fake.com',
	password: 'prueba123',
}]

const credentialsValidator = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required()
})

const validator = <T>(validatorSchema: joi.ObjectSchema, input: T) => {
	const { error } = validatorSchema.validate(input, { abortEarly: false });
	return error;
};

async function main() {
	const server = new Server();

	server.addService(AuthServiceService, {
		login: async (call: ServerUnaryCall<AuthRequest, AuthResponse>, callback: sendUnaryData<AuthResponse>) => {
			if (!call.request.hasCredentials()) {
				return callback(new errors.InvalidArgumentError('Invalid data'))
			}

			const error = validator(credentialsValidator, call.request.getCredentials()?.toObject());
			if (error) {
				return callback(new errors.InvalidArgumentError(error.message))
			}

			const credentials = call.request.getCredentials()!;

			const user = users.find(u => u.email === credentials.getEmail());
			if (!user) {
				return callback(new errors.PermissionDeniedError('Invalid email or password'));
			}

			if (user.password !== credentials.getPassword()) {
				return callback(new errors.PermissionDeniedError('Invalid email or password'));
			}
			const response = new AuthResponse();
			response.setToken(`Something ${credentials?.getPassword()}-${credentials?.getEmail()}` )

			callback(null, response);
		}
	})

	const bind = (port: string) => new Promise((resolve, reject) => {
		server.bindAsync(port, ServerCredentials.createInsecure(), (err) => {
			if (err) reject(err);
			resolve(true);
		})
	});

	await bind('0.0.0.0:3000');
	server.start();

	console.log('server started');
}

main().catch(() => {});

