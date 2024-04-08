import json
import sys

def main():
    # Get input from stdin
    input_data = json.loads(sys.stdin.read())

    # Process the input
    # For demonstration, let's just return the input reversed
    output_data = input_data['input'][::-1]

    # Output the result
    print(json.dumps({'output': output_data}))

if __name__ == "__main__":
    main()
