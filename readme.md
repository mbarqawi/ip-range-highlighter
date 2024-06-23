# IP Range Analyzer Extension

IP Range Analyzer is a Chrome/Edge extension that allows users to input multiple IP ranges in CIDR notation, analyze them to find the start and end IPs, check for overlaps, and display the size of each IP range.

## Features

- Input multiple IP ranges in CIDR notation.
- Calculate and display the start and end IPs for each range.
- Determine and indicate if there is any overlap between the IP ranges.
- Display the size of each IP range.

## Installation

### For Chrome

1. Clone or download the repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable Developer mode by toggling the switch in the upper-right corner.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded the repository.

### For Edge

1. Clone or download the repository to your local machine.
2. Open Edge and go to `edge://extensions/`.
3. Enable Developer mode by toggling the switch in the upper-right corner.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded the repository.

## Usage

1. Click the IP Range Analyzer extension icon to open the popup.
2. Enter IP ranges in the input fields (e.g., `192.168.1.0/24`).
3. Click "Add another range" to add more input fields.
4. Click "Analyze" to process the IP ranges.
5. The results table will display the start IP, end IP, size, and overlap status for each range.

## Files

- `manifest.json`: Configuration file for the extension.
- `background.js`: Background script for the extension.
- `content.js`: Content script for the extension.
- `popup.html`: HTML file for the extension's popup UI.
- `popup.css`: CSS file for styling the popup UI.
- `popup.js`: JavaScript file containing the logic for the popup UI.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshots

![Screenshot 1](images/image.png)
![Screenshot 2](images/image-1.png)

## Note

This extension was built with the help of ChatGPT.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact the repository owner.
