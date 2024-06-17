---

# Azure AI Vision Service Image Analysis
![preview](https://github.com/mxbb-0-1/azure_image_analysis/assets/87257572/3e50086d-34b2-4e32-83d8-9dbdb616feeb)



## Introduction

Welcome to the **Azure AI Vision Service Image Analysis** project! This React application leverages the powerful Azure AI Vision Service to analyze images and provide detailed insights such as tags, descriptions, objects, and more. Perfect for exploring the capabilities of Azure's image analysis and learning how to integrate AI services into your applications.

## Features

- **Image URL Input**: Enter any image URL for analysis.
- **Dynamic Analysis**: Customize the visual features to be analyzed including tags, captions, and object detection.
- **Real-time Feedback**: Get immediate results displayed in a readable format.
- **Loading Indicator**: User-friendly experience with a loading spinner during analysis.
- **Error Handling**: Robust error messages in case of any issues during the analysis.

## Demo

![Demo GIF](https://via.placeholder.com/800x400.gif?text=Demo+GIF)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mxbb-0-1/azure-image-analysis.git
   cd azure-image-analysis
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your Azure AI Vision Service credentials:

   ```bash
   REACT_APP_VISION_KEY=your_subscription_key
   REACT_APP_VISION_ENDPOINT=https://your_custom_subdomain.cognitiveservices.azure.com/
   ```

4. **Start the Application**:
   ```bash
   npm start
   # or
   yarn start
   ```

   Open [https://zealous-sky-07a2afc0f.5.azurestaticapps.net](https://zealous-sky-07a2afc0f.5.azurestaticapps.net) to view it in the browser.

## Usage

1. **Enter an Image URL**: Type or paste an image URL into the input field.
2. **Click "Analyze"**: Press the "Analyze" button to start the image analysis.
3. **View Results**: The analyzed image and its details will be displayed on the screen.

![Usage Screenshot](https://via.placeholder.com/800x400.png?text=Usage+Screenshot)

## Configuration

You can customize the visual features to be analyzed by modifying the `analyzeImage` function in the `azure-image-analysis.js` file. The available features include:

- `tags`: Provides a list of detailed tags related to the image content.
- `read`: Reads visible text in the image using OCR.
- `caption`: Describes the image content with complete sentences.
- `denseCaptions`: Generates detailed captions for prominent image regions.
- `smartCrops`: Suggests cropping regions that preserve the area of interest.
- `objects`: Detects various objects within the image.
- `people`: Detects people appearing in the image.

Update the function like so:

```javascript
export async function analyzeImage(imageUrl, features = 'tags,read,caption,denseCaptions,smartCrops,objects,people') {
    // Rest of the code
}
```

## Technology Stack

- **Frontend**: [React](https://reactjs.org/)
- **Backend**: [Azure AI Vision Service](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)

## Contributing

We welcome contributions to improve this project! Here’s how you can help:

1. **Fork the repository**
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add feature/your-feature-name"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a pull request** detailing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out:

- GitHub: [mxbb-0-1](https://github.com/mxbb-0-1)
- Email: asblueberry43@gmail.com

---
