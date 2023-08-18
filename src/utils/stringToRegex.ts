export function stringToRegex(input: string): string {
    // Escape special characters in the input string
    const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    return escapedInput;
}
