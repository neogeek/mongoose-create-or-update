BIN=node_modules/.bin

test:
	make lint
	$(BIN)/mocha test/specs/
	$(BIN)/doxdox index.js --layout markdown --package package.json | diff DOCUMENTATION.md -

lint:
	$(BIN)/eslint index.js
	$(BIN)/eslint test/specs/

coverage:
	$(BIN)/istanbul cover $(BIN)/_mocha test/specs/ && $(BIN)/codecov

docs:
	$(BIN)/doxdox index.js --layout markdown --package package.json --output DOCUMENTATION.md

.PHONY: test coverage
