import {useState} from 'react';

function GreetingCard({id, recipient, message, postDate}) {
      return (
        <div className="card mb-3">
          <div className="card-body">
            <p className="card-text">ID: {id}</p>
            <p className="card-text">To: {recipient}</p>
            <p className="card-text">{message}</p>
            <p className="card-text">Posted: {postDate.toLocaleString('en-US', { 
                month: 'short', // e.g. "Jan"
                day: 'numeric', // e.g. "1"
                year: 'numeric', // e.g. "2023"
                hour: 'numeric', // e.g. "2 PM"
                minute: 'numeric', // e.g. "30"
                hour12: true // e.g. "2:30 PM" for 12-hour format when true; 
                             // else "14:30" for 24-hour format 
              })}</p>
          </div>
        </div>
      );
    }
    /*function App() {*/
    function GreetCard() {
      const [inputs, setInputs] = useState({
        recipient: '',
        message: ''
      });
      const [cards, setCards] = useState([]);

      function handleChange(event) {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }));
      }

      function handleSubmit(event) {
        event.preventDefault();
        let newCard = {
          id: cards.length + 1,
          recipient: inputs.recipient,
          message: inputs.message,
          postDate: new Date() // now
        };
        setCards([...cards, newCard]);

        // Reset form inputs after submission
        setInputs({recipient: '', message: ''});
      }
      return (
        <div className="container mt-4">
          <h1 className="display-6 fw-bold">Greeting Card Generator</h1>
          
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="recipient" class="form-label">Recipient's name:</label>
              <input 
                type="text"
                class="form-control"
                id="recipient"
                value={inputs.recipient}
                onChange={(e) => setInputs({...inputs, recipient: e.target.value})}
                name="recipient"
                placeholder="Enter recipient's name"
              />
            </div>
            
            <div class="mb-3">
              <label for="message" class="form-label">Your message:</label>
              <input 
                type="text"
                class="form-control"
                id="message"
                value={inputs.message}
                onChange={handleChange}
                name="message"
                placeholder="Enter your message"
              />
            </div>

            <button type="submit" class="btn btn-primary">Create Card</button>
          </form>

          <div className="mt-4">
            {cards.map(card => (
              <GreetingCard 
                key={card.id} 
                id={card.id} 
                recipient={card.recipient} 
                message={card.message} 
                postDate={card.postDate} 
              />
            ))}
          </div>
        </div>
      );
    }

export default GreetCard;
