# Angelcam Fullstack Assignment

This project is a fullstack application that uses Django for the backend and React for the frontend. It integrates with the Angelcam API to display live streams and recordings from shared cameras.

## Prerequisites

Make sure you have the following installed on your system:
- Python 3.8 or higher
- Node.js 14.x or higher
- npm (Node package manager)

## Setup Instructions

### Backend (Django)

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Create a virtual environment:**
    ```sh
    python -m venv myenv
    ```

3. **Activate the virtual environment:**
    - On Windows:
        ```sh
        myenv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source myenv/bin/activate
        ```

4. **Create `requirements.txt` and add the following content:**
    ```plaintext
    Django>=3.0,<4.0
    requests>=2.25.1
    django-cors-headers>=3.7.0
    ```

5. **Install the backend dependencies:**
    ```sh
    pip install -r requirements.txt
    ```

6. **Apply migrations:**
    ```sh
    python manage.py migrate
    ```

7. **Run the Django development server:**
    ```sh
    python manage.py runserver
    ```

### Frontend (React)

1. **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

2. **Install the frontend dependencies:**
    ```sh
    npm install
    ```

3. **Start the React development server:**
    ```sh
    npm start
    ```

## Running the Application

1. **Start the Django server:**
    ```sh
    python manage.py runserver
    ```

2. **Start the React server:**
    ```sh
    npm start
    ```

3. **Access the application:**
    Open your web browser and go to `http://localhost:3000`.

## Using the Application

1. **Login:**
    - Enter your Personal Access Token obtained from the Angelcam dashboard.
    - Click on the "Login" button.

2. **View Cameras:**
    - After a successful login, the cameras shared with your account will be displayed.
    - Click on any camera to view the live stream and available recordings.

## Project Structure

- **Backend:** Contains the Django application with the necessary configurations and endpoints to handle API requests.
- **Frontend:** Contains the React application with the UI components to interact with the backend and display camera feeds.

## Troubleshooting

- Ensure that both the Django and React development servers are running.
- If you encounter CORS issues, verify that the `CORS_ALLOW_ALL_ORIGINS` setting is properly configured in your Django settings.


