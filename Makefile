# Run in local mode
run: 
	npx functions-framework --target=app --source=src

# Run and watch for file changes
dev:
	npx nodemon

# Run tests
test:
	npx jest

.PHONY: test