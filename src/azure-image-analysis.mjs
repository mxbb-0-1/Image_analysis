// azure-image-analysis.js
import axios from 'axios';

// Replace with your endpoint and key
const endpoint = 'https://sherwinimage.cognitiveservices.azure.com/';
const subscriptionKey = 'd43e54f05e2f43a597cb7284971f34b1';

export async function analyzeImage(imageUrl, features = 'tags,read,caption,denseCaptions,smartCrops,objects,people') {
    const url = `${endpoint}/computervision/imageanalysis:analyze?api-version=2024-02-01`;
    const params = {
        features: features,
    };

    try {
        const response = await axios.post(
            url,
            { url: imageUrl },
            {
                params: params,
                headers: {
                    'Ocp-Apim-Subscription-Key': subscriptionKey,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error analyzing image:', error.response ? error.response.data : error.message);
        throw error;
    }
}