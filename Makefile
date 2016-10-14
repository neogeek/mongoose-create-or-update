BIN=node_modules/.bin

test:
	make lint
	$(BIN)/mocha test/specs/**/*.js

lint:
	$(BIN)/eslint index.js test/specs/**/*.js

coverage:
	$(BIN)/istanbul cover $(BIN)/_mocha ./test/specs && $(BIN)/codecov

docs:
	$(BIN)/doxdox index.js --layout Markdown --package package.json --output DOCUMENTATION.md

.PHONY: test coverage
