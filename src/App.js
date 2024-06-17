// App.js
import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis.mjs';

function App() {
    const [imageUrl, setImageUrl] = useState('');
    const [analysisResults, setAnalysisResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAnalyzeClick = async () => {
        if (!imageUrl) {
            alert("Please enter a valid image URL.");
            return;
        }

        setLoading(true);
        setError(null);
        setAnalysisResults(null);

        try {
            const results = await analyzeImage(imageUrl);
            setAnalysisResults(results);
        } catch (error) {
            setError('Failed to analyze image. Check console for more details.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    return (
        <div className="App">
            <h1>Azure AI Vision Service Image Analysis</h1>
            <input
                type="text"
                value={imageUrl}
                onChange={handleImageUrlChange}
                placeholder="Enter image URL"
                style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
            />
            <button onClick={handleAnalyzeClick} disabled={loading} style={{ padding: '10px' }}>
                Analyze
            </button>
            {loading && <p>Analyzing...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {analysisResults && <DisplayResults results={analysisResults} imageUrl={imageUrl} />}
        </div>
    );
}

function DisplayResults({ results, imageUrl }) {
    return (
        <div>
            <h2>Analysis Results</h2>
            <img src={imageUrl} alt="Analyzed" style={{ maxWidth: '100%', marginBottom: '10px' }} />
            <pre style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
}

export default App;
