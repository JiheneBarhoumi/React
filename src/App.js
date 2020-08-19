import React from 'react';
import img from './contact.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div class="grid-container">
             
           <side class="item2">  
            <img src={img} alt="image"/>
           </side>  
          
        <section class="item3">
         <h1>Subscribe !</h1> <hr/>
         <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">Name</label>
                  <input type="text" class="form-control" id="inputName" placeholder="Enter your name"/>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputFamName">Family Name</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Enter your Family name"/>
                  </div>
              </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
              </div>
              <div class="form-group col-md-6">
              <label for="inputPhone">Telephone</label>
              <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input"/>
              </div>
               
              <div class="form-group col-md-6">
                <label for="inputDate">Date of birth</label>
                <input class="form-control" type="date" value="2011-08-19" id="example-date-input"/>
                </div>

            </div>            
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputCountry">Country</label>
                    <input type="text" class="form-control" id="inputCountry"/>
                  </div>
              <div class="form-group col-md-4">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity"/>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
    </section>
</div>
    </div>
  );
}

export default App;
