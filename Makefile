# Run in local mode
run: 
	npx functions-framework --target=app --source=dist

# Run and watch for file changes
dev:
	npx nodemon

build:
	./node_modules/.bin/tsc -p tsconfig.json
	npx cpx 'src/**/*.ejs' 'dist'

# Run tests
test:
	npx jest

# Lint
lint:
	npx gts fix

.SILENT:
.PHONY: test dev build run
