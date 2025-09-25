from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/ai', methods=['POST'])
def ai():
    data = request.json
    text = data.get('text', '')
    # Example AI processing (echo text in uppercase)
    return jsonify({'result': text.upper()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)

