import { ProtoCat as Server, onError, ProtoCatCall } from 'protocat';
import * as errors from 'grpc-errors';
import { AuthServiceService } from '../proto/auth_grpc_pb';
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
		login: [async (call, next) => {
			if (!call.request.hasCredentials()) {
				throw new errors.InvalidArgumentError('Invalid data');
			}

			const error = validator(credentialsValidator, call.request.getCredentials()?.toObject());
			if (error) {
				throw new errors.InvalidArgumentError(error.message);
			}

			await next();
		}, async (call) => {
			const credentials = call.request.getCredentials()!;

			const user = users.find(u => u.email === credentials.getEmail());
			if (!user) {
				throw new errors.PermissionDeniedError('Invalid email or password');
			}

			if (user.password !== credentials.getPassword()) {
				throw new errors.PermissionDeniedError('Invalid email or password');
			}

			call.response.setToken(`Something ${credentials?.getPassword()}-${credentials?.getEmail()}`);
		}]
	})

	server.use(
		onError((e: any, call: ProtoCatCall<any>) => {
			console.log(`code: ${e.code}, message: ${e.message}`);
			// call.initialMetadata.set('error-code', e.code);
			// call.trailingMetadata.set('error-code', e.code);

			throw e;
		})
	)

	server.start('0.0.0.0:3000');
	console.log('server started');
}

main().catch(() => {});

