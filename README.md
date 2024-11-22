# Word to PDF Converter

![Word to PDF Converter](https://github.com/shavybachata/PdfConverter/blob/master/Rapidfort.png)

This is a simple application that allows users to upload a `.docx` file and convert it to a PDF. It consists of a backend built using **Node.js** and **Express** for handling file uploads and conversions, and a **React** frontend for a user-friendly interface.

## Features

- Upload `.docx` files.
- Convert the uploaded Word document to a PDF.
- Download the converted PDF file.
- Display metadata about the uploaded file (e.g., name, size, type).

## Technologies Used

- **Backend**: 
  - **Node.js** with **Express.js** for the server.
  - **Multer** for handling file uploads.
  - **docx-pdf** to convert DOCX files to PDF.
  - **CORS** for enabling cross-origin requests.
  
- **Frontend**: 
  - **React** for building the user interface.
  - **axios** for making HTTP requests to the backend.

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/word-to-pdf-converter.git
    cd word-to-pdf-converter/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the server:
    ```bash
    node app.js
    ```

    The server will start on port `3000`. You can change the port by modifying the `port` variable in `app.js`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the frontend:
    ```bash
    npm start
    ```

    The frontend will start on port `3000` (or another available port if `3000` is in use).

## How It Works

1. The user selects a `.docx` file using the file input.
2. The selected file is sent to the backend server via a POST request to `/convertFile`.
3. The backend converts the `.docx` file to a `.pdf` using the `docx-pdf` library.
4. The converted `.pdf` file is sent back to the frontend for the user to download.

