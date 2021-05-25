import React from "react";
import InputCss from "./Input.module.css";

const Input = (props) => {

  return (
    <React.Fragment>
      <div className={InputCss.Layout}>
        <header>Sign Up</header>
        <br />
        <div className={InputCss.Input}>
          <label>Name</label>
          <br />
          <input type="text" value={props.name} onChange={props.changeName} />
          <br />
          <label>Phone no</label>
          <br />
          <input type="text" value={props.phno} onChange={props.changePhno} />
          <br />
          <label>Email</label>
          <br />
          <input type="text" value={props.email} onChange={props.changeEmail} />
          <br />
        </div>
        <div className={InputCss.Div}>
          <div>
            <label className={InputCss.Gender}>Gender</label>
            <div className={InputCss.Radio}>
              <input
                type="radio"
                value="female"
                checked={props.gender === "female"}
                onChange={props.changedGender}
              />
              <label>Female</label>

              <div>
                <input
                  type="radio"
                  value="male"
                  checked={props.gender === "male"}
                  onChange={props.changedGender}
                />
                <label>Male</label>
              </div>
            </div>
          </div>
          <div className={InputCss.Dropdown}>
            <label>Age</label>
            <select
              value={props.age}
              style={{ width: "50px", height: "25px", borderRadius: "20px" }}
              onChange={props.changedAge}
            >
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              ))
            </select>
          </div>
        </div>
        <br />
        <div className={InputCss.Remark}>
          <label>Password</label>
          <br />
          <input
            type="text"
            value={props.password}
            onChange={props.changePassword}
          />
          <br />
        </div>
        <div>
          <button className={InputCss.Button1}>
            Get Info
          </button>{" "}
          <button
            className={InputCss.Button2}
            onClick={props.submit}
            disabled={props.disabled}
          >
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Input;
