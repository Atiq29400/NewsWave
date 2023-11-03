import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { useHistory } from 'react-router-dom';


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    ageGroup: '',
    interest: {
      Business: false,
      Entertainment: false,
      General: false,
      Health: false,
      Science: false,
      Sport: false,
      Technology: false,
    },
    profession: '',
  });
  
  useEffect(() => {
    const script = document.createElement('script');
    
    script.innerHTML = `
    var myInput = document.getElementById("psw");
		var letter = document.getElementById('letter');
		var capital = document.getElementById('capital');
		var number = document.getElementById('number');
		var length = document.getElementById('length');
		
		myInput.onfocus = () => {
      document.getElementById('message').style.display = 'block';
		}
		myInput.onblur = () => {
      document.getElementById('message').style.display = 'none';
		}
		
		myInput.onkeyup = () => {
      var lowerCaseLetters = /[a-z]/g;
			if(myInput.value.match(lowerCaseLetters)){
        letter.classList.remove('invalid');
				letter.classList.add('valid');
			} else {
				letter.classList.remove('valid');
				letter.classList.add('invalid');
			}
			var upperCaseLetters = /[A-Z]/g;
			if(myInput.value.match(upperCaseLetters)){
        capital.classList.remove('invalid');
				capital.classList.add('valid');
			} else {
				capital.classList.remove('valid');
				capital.classList.add('invalid');
			}
			
			var numbers = /[0-9]/g;
			if(myInput.value.match(numbers)) {
				number.classList.remove('invalid');
				number.classList.add('valid');
			} else {
				number.classList.remove('valid');
				number.classList.add('invalid');
			}
			
			if(myInput.value.length >= 8) {
				length.classList.remove('invalid');
				length.classList.add('valid');
			} else {
        length.classList.add('invalid');
				length.classList.remove('valid');
			}
		}
    `;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const history = useHistory();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Set the checked state variable
    if (e.target === 'interest') {
      setFormData({
        ...formData,
        interest: {
          ...formData.interest,
          [value]: e.target.checked,
        },
      });
    }
  };

  // const handleSubmit = (e) => {
    // e.preventDefault();
    // fetch('http://localhost:3000/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('User signed up:', data);
    //     // You can handle the response here
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     console.log("ERROR");
    //     // You can handle the error here
    //   });

    const handleLogin = () => {
      history.push('/login');
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let errorMessage = "";
      if (!formData.fullName) {
        errorMessage += "Full Name is required. ";
      }
      if (!formData.email) {
        errorMessage += "Email is required. ";
      }
      if (!formData.password) {
        errorMessage += "Password is required. ";
      }
      if (formData.password !== formData.confirmPassword) {
        errorMessage += "Passwords do not match. ";
      }
      if (!formData.ageGroup) {
        console.log(formData.ageGroup);
        errorMessage += "Please select an age group. ";
      }
      if (errorMessage !== "") {
        const errorDiv = document.getElementById("error-message");
        errorDiv.innerText = errorMessage;
        errorDiv.style.color = "red";
        console.log(formData.password);
      } else {
        const errorDiv = document.getElementById('error-message');
        errorDiv.innerText = '';
        history.push('/login');
        // Perform form submission if all fields are filled and passwords match
        // fetch('http://localhost:3000/signup', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log('User signed up:', data);
        //     // You can handle the response here
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //     console.log("ERROR");
        //     // You can handle the error here
        //   });
      }    
    // };
    
  };

  return (
    <div className='bg-secondary p-2 text-dark bg-opacity-10'>
      <div>.</div>
      <div className='title'>
        <h1>WELCOME TO NEWSWAVE</h1>
        <div>SignUp form if you're already registered then 
        <button style={{paddingBottom: 9, width: 85, height: 41}} type='button' className="btn btn-link" onClick={handleLogin}>Login</button> here</div>
      </div>
    <form onSubmit={handleSubmit} className="p-4 container bg-dark p-2 text-dark bg-opacity-10" style={{width: '40rem'}}>
      <div className="mb-3">
        <label className="form-label">Full Name:</label>
        <input
          title='Name must be entered'
          type="text"
          className="form-control"
          name="fullName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder='Enter your name'
          required
          pattern='[a-zA-Z ]{2,}' 
        />
        <div className='details'>e.g. Atiq ur Rehman</div>
      </div>
      <hr/>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Enter your email'
        />
        <div className='details'>e.g. example@abc.com</div>
      </div>
      <hr/>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          id='psw'
          type="password"
          className="form-control"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder='Enter your password'
        />
        <div id='message'>
          <p id='letter' className='invalid'>A <b>lowercase</b> letter </p>
          <p id='capital' className='invalid'>A <b>capital (uppercase)</b> letter</p>
          <p id='number' className='invalid'>A <b>number</b></p>
          <p id='length' className='invalid'>Minimum <b>8 characters </b></p>
        </div>
        <label className="form-label">Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder='Re-enter your password'
        />
        
      </div>
      <hr/>
      <div className="mb-3">
        <label className="form-label">Age Group:</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ageGroup"
            value="<18"
            id='18'
            checked={formData.ageGroup === '<18'}
            onChange={handleInputChange}
          />
          <label htmlFor='18' className="form-check-label">&lt;18</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ageGroup"
            value="18-25"
            id='25'
            checked={formData.ageGroup === '18-25'}
            onChange={handleInputChange}
          />
          <label htmlFor='25' className="form-check-label">18-25</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ageGroup"
            value="26-35"
            id='26'
            checked={formData.ageGroup === '26-35'}
            onChange={handleInputChange}
          />
          <label htmlFor='26' className="form-check-label">26-35</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ageGroup"
            value="35"
            id='35'
            checked={formData.ageGroup === '35'}
            onChange={handleInputChange}
          />
          <label htmlFor='35' className="form-check-label">35+</label>
        </div>
      </div>
      <hr/>
      <div className="mb-3">
        <label className="form-label">Interest:</label>
        {Object.keys(formData.interest).map((interest) => (
          <div className="form-check" key={interest}>
            <input
              className="form-check-input"
              type="checkbox"
              name={interest}
              id={`${interest}`}
              // checked={formData.interest[interest]}
              // onChange={handleInputChange}
            />

            <label htmlFor={`${interest}`} className="form-check-label">{interest}</label>
          </div>
        ))}
        <div className='details'>We'll show news on the basis of your interest</div>
      </div>
      
      <hr/>
      <div className="mb-3">
        <label className="form-label">Profession:</label>
        <input
          type="text"
          className="form-control"
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
        />
      </div>
      <hr/>
      <div id="error-message"></div>

      <button type="submit" className="btn btn-primary">
        SignUp
      </button>
    </form>
    <div>.</div>
    </div>
    
  );
};

export default SignUpForm;