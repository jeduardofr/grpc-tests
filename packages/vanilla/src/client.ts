import { credentials } from "@grpc/grpc-js";
import { AuthServiceClient } from "../proto/auth_grpc_pb";
import { Credentials, AuthRequest } from "../proto/auth_pb";

const waitFor = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
	await waitFor(200);

	const client = new AuthServiceClient('0.0.0.0:3000', credentials.createInsecure());

	{
		const request = new AuthRequest();
		const credentials = new Credentials();
		credentials.setEmail('something@fake.com').setPassword('prueba123');
		request.setCredentials(credentials);
		client.login(request, (err, response) => {
			console.assert(
				response.getToken() === "Something prueba123-something@fake.com",
				"Invalid token"
			);
		})
	}

	{
		// Create a wrapper with Maybe as an API to not have to deal with try catch
		const request = new AuthRequest();
		await client.login(request, (err, response) => {
			console.assert(err!.code === 3, "Status code was not 3");
		});
	}

	{
		const request = new AuthRequest();
		const credentials = new Credentials();
		credentials.setEmail('hello@email.com').setPassword('prueba123');
		request.setCredentials(credentials);
		client.login(request, (err, response) => {
			console.assert(err!.code === 7, "status code was not 7");
		})
	}

}

main().catch(console.error);
