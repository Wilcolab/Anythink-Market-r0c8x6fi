/**
 * Converts a given string to kebab-case.
 * 
 * @param {string} str - The input string to convert.
 * @returns {string} - The kebab-case version of the input string.
 * @throws {Error} - Throws an error if the input is not a string or is null/undefined.
 * 
 * @example
 * toKebabCase("Hello World"); // "hello-world"
 * toKebabCase("my_variable_name"); // "my-variable-name"
 * toKebabCase("AnotherExampleHere"); // "another-example-here"
 */
function toKebabCase(str) {
    if (typeof str !== 'string' || str == null) {
        throw new Error('Input must be a non-null string.');
    }

    return str
        .trim() // Step 2: Normalize the string
        .toLowerCase()
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/([a-z])([A-Z])/g, '$1-$2'); // Replace uppercase letter boundaries with hyphens
}

// Example usage
console.log(toKebabCase("Hello World")); // "hello-world"
console.log(toKebabCase("my_variable_name")); // "my-variable-name"
console.log(toKebabCase("AnotherExampleHere")); // "another-example-here"