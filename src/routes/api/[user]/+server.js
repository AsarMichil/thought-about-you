import { error } from '@sveltejs/kit';
// import db from database;
import { env } from '$env/dynamic/private';

import { DynamoDBClient, ListTablesCommand, QueryCommand } from '@aws-sdk/client-dynamodb'; // ES6 import
import { GetCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';

// console.log('env', env);

export async function GET({ params }) {
	const client = new DynamoDBClient({
		region: 'us-west-1',
		credentials: { accessKeyId: env.AWS_ACCESS_KEY_ID, secretAccessKey: env.AWS_SECRET_ACCESS_KEY }
	});
	// const command = new ListTablesCommand({});
	// const scan = new ScanCommand({ TableName: 'users' });
	// const getAllUsersCommand = new QueryCommand({
	// 	TableName: 'users',
	// 	KeyConditionExpression: 'asar_zuluev'
	// });
	// console.log('params', params);
	const getSpecificUserCommand = new GetCommand({
		TableName: 'ThoughtAboutYou',
		Key: {
			pk: params.user,
			sk: 'user'
		}
	});

	try {
		// const results = await client.send(command);
		// console.log(results.TableNames?.join('\n'));
		// const allUsers = await client.send(scan);
		// console.log(allUsers);
		const specificUser = await client.send(getSpecificUserCommand);
		// console.log(specificUser);
		// console.log(specificUser);
		const user = specificUser?.Item;
		console.log(user);
		if (!user) throw error(400, 'No user exists.');
		return new Response(
			JSON.stringify({
				username: user.pk,
				givenName: user.GivenName,
				surname: user.Surname,
				age: user.Age,
				blurb: user.Blurb,
				imgUri: user.ImageURI
			})
		);
	} catch (err) {``
		console.error(err);
		throw error(400, 'No user exists. Hehe');
	}

	// const userName = params.user;
	// const user = users.find((user) => user.first_and_last === userName);
	// const product = db.collection.find(productName);
}
