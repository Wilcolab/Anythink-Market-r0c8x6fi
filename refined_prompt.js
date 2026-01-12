/**
 * Converts a string to camelCase format.
 * 
 * Transforms input strings by splitting on whitespace, underscores, or hyphens,
 * then joining the words together with the first word in lowercase and subsequent
 * words capitalized.
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The converted camelCase string, or empty string if input is empty
 * @throws {TypeError} If input is not a string type
 * 
 * @example
 * toCamelCase("first name");           // "firstName"
 * toCamelCase("USER_ID");              // "userId"
 * toCamelCase("  mobile-number ");     // "mobileNumber"
 * toCamelCase("");                     // ""
 * 
 * @example
 * // Throws TypeError for non-string input
 * toCamelCase(123);                    // TypeError: Expected a string, but received number
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input strings by splitting on whitespace, underscores, or hyphens,
 * then joining the words together with periods (dots) as separators. All characters
 * are converted to lowercase.
 * 
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The converted dot.case string, or empty string if input is empty
 * @throws {TypeError} If input is not a string type
 * 
 * @example
 * toDotCase("first name");           // "first.name"
 * toDotCase("USER_ID");              // "user.id"
 * toDotCase("  mobile-number ");     // "mobile.number"
 * toDotCase("");                     // ""
 * 
 * @example
 * // Throws TypeError for non-string input
 * toDotCase(123);                    // TypeError: Expected a string, but received number
 */
function toCamelCase(input) {
    // Error handling for non-string types
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }

    // Handle null, undefined, and empty string
    if (!input) {
        return '';
    }

    // Trim extra spaces
    const trimmed = input.trim();

    // Handle empty string after trimming
    if (trimmed === '') {
        return '';
    }

    // Split by multiple separators (spaces, underscores, hyphens)
    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    // Handle case where no valid words exist
    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowercase = word.toLowerCase();
            // Capitalize first letter of each word except the first
            return index === 0 
                ? lowercase 
                : lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
        })
        .join('');
}

// Test cases
console.log(toCamelCase("first name"));           // "firstName"
console.log(toCamelCase("USER_ID"));              // "userId"
console.log(toCamelCase("  mobile-number "));     // "mobileNumber"
console.log(toCamelCase(""));                     // ""

try {
    toCamelCase(123);
} catch (error) {
    console.error(error.message);                   // "Expected a string, but received number"
}
function toDotCase(input) {
    // Error handling for non-string types
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }

    // Handle null, undefined, and empty string
    if (!input) {
        return '';
    }

    // Trim extra spaces
    const trimmed = input.trim();

    // Handle empty string after trimming
    if (trimmed === '') {
        return '';
    }

    // Split by multiple separators (spaces, underscores, hyphens)
    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    // Handle case where no valid words exist
    if (words.length === 0) {
        return '';
    }

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Test cases
console.log(toDotCase("first name"));           // "first.name"
console.log(toDotCase("USER_ID"));              // "user.id"
console.log(toDotCase("  mobile-number "));     // "mobile.number"
console.log(toDotCase(""));                     // ""

try {
    toDotCase(123);
} catch (error) {
    console.error(error.message);               // "Expected a string, but received number"
}
