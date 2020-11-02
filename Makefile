# Run in local mode
run: 
	npx functions-framework --target=app --source=dist

# Run and watch for file changes
dev:
	npx nodemon

build:
	./node_modules/.bin/tsc -p tsconfig.json

# Run tests
test:
	npx jest

.SILENT:
.PHONY: test dev build run
