'use client';

import { useEffect, useRef, useState } from 'react';

export default function ModelViewer() {
  const canvasRef = useRef(null);
  const [modelUrl, setModelUrl] = useState('/api/models?file=sample-cube.glb');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This is a placeholder for a 3D model viewer implementation
    // In a real implementation, you would use a library like Three.js, Babylon.js, or model-viewer
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Placeholder drawing
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('3D Model Viewer', canvas.width / 2, canvas.height / 2 - 20);
    ctx.fillText('Replace with actual 3D rendering library', canvas.width / 2, canvas.height / 2 + 10);
    ctx.fillText(`Model: ${modelUrl}`, canvas.width / 2, canvas.height / 2 + 40);
  }, [modelUrl]);

  const handleModelChange = (e) => {
    const file = e.target.value;
    if (file) {
      setModelUrl(`/api/models?file=${file}`);
      setIsLoading(true);
      setError(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">3D Model Viewer</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Model Selection</h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="model-select" className="text-gray-700">Choose a model:</label>
            <select 
              id="model-select"
              onChange={handleModelChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="sample-cube.glb">Sample Cube</option>
              {/* Add more models as they become available */}
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Model Preview</h2>
          {isLoading && (
            <div className="flex justify-center items-center h-96">
              <div className="text-gray-500">Loading model...</div>
            </div>
          )}
          {error && (
            <div className="flex justify-center items-center h-96">
              <div className="text-red-500">Error: {error}</div>
            </div>
          )}
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="border border-gray-300 rounded w-full"
            style={{ display: isLoading || error ? 'none' : 'block' }}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Model Information</h2>
          <div className="space-y-2">
            <p><strong>Model URL:</strong> {modelUrl}</p>
            <p><strong>Direct Access:</strong> <a href={modelUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{modelUrl}</a></p>
            <p><strong>CORS Enabled:</strong> Yes</p>
            <p><strong>Supported Formats:</strong> GLB, GLTF, OBJ, FBX, USD</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Integration Instructions</h2>
          <div className="text-blue-800 space-y-2">
            <p>To use this 3D model in external applications:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Use the direct URL: <code className="bg-blue-100 px-1 rounded">{modelUrl}</code></li>
              <li>The model is served with CORS headers allowing cross-origin access</li>
              <li>Models are cached for optimal performance</li>
              <li>Replace the placeholder with your actual 3D model files in the public/models directory</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}