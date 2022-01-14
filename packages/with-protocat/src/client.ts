import { createClient } from "protocat";
import { AuthServiceClient } from "../proto/auth_grpc_pb";
import { Credentials } from "../proto/auth_pb";

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
    await waitFor(50);

    const client = createClient({ auth: AuthServiceClient }, '0.0.0.0:3000');

    {
        const { response, status } = await client.auth.login((req) => {
            const credentials = new Credentials()
            credentials.setEmail('something@fake.com').setPassword('prueba123');
            req.setCredentials(credentials);
        })

        console.assert(status.code === 0, 'Status code was not 0');
        console.assert(response.getToken() === 'Something prueba123-something@fake.com', 'Invalid token')
    }

    {
        try { 
            // Create a wrapper with Maybe as an API to not have to deal with try catch
            await client.auth.login((req) => { })
        } catch (err: any) { 
            console.assert(err.code === 3, 'Status code was not 3');
        }

    }

    {
        try { 
            await client.auth.login((req) => {
                const credentials = new Credentials()
                credentials.setEmail('hello@email.com').setPassword('prueba123');
                req.setCredentials(credentials);
            });
        } catch (err: any) { 
            console.assert(err.code === 7, 'Status code was not 7');
        }
    }
}

main().catch(console.error);