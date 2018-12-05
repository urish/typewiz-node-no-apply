# typewiz-node-no-apply

Quick demo of using [typewiz-node](https://npmjs.org/package/typewiz-node) and writing collected type information to disk.

## Usage

1. Install dependencies by running `yarn`
2. Run the code using `yarn start`
3. You will find the collected type information inside `collected-types.json`. 

You can then use the typewiz cli to apply these types:

    typewiz apply collected-types.json

## License

MIT