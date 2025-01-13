import { useState } from "react";
import "./content-style.css"

const Content = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subject, setSubject] = useState({
        english: true,
        math: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [URL, setURL] = useState("");
    const [choiceSelected, setChoiceSelected] = useState("");
    const [about, setAbout] = useState("");

    const handleChangeSubject = (subject) => {
        setSubject((previous) => ({
            ...previous, [subject]: !previous[subject],
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !email || !contact || !gender || !subject || !resume || !URL || !choiceSelected || !about) { }
        else {
            const userAccount = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                contact: contact,
                gender: gender,
                subject: subject,
                resume: resume,
                url: URL,
                selected: choiceSelected,
                about: about,
            }

            console.log(userAccount);
        }


    }
    const handleReset = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubject({
            english: true,
            math: false,
            physics: false
        });
        setResume("");
        setURL("");
        setChoiceSelected("");
        setAbout("");
    }

    return (
        <fieldset>
            <form action="#" method="GET">
                <div className="row1">
                    <label htmlFor="firstname">First name:
                        <input
                            id="firstname"
                            name="firstname"
                            placeholder="Ex. John"
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor="lastname">Last name:
                        <input
                            id="lastname"
                            name="lastname"
                            placeholder="Ex. Doe"
                            type="text"
                            autoComplete="off"
                            onChange={e => setLastname(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor="email">Enter email:<input
                        id="email"
                        name="email"
                        placeholder="Ex. JohnDoe@email.com"
                        type="email" autoComplete="off"
                        onChange={e => setEmail(e.target.value)}
                        required
                    /></label>

                    <label htmlFor="contact">Contact:
                        <input
                            id="contact"
                            name="contact"
                            placeholder="Ex. 09 123 4567 890"
                            type="tel"
                            autoComplete="off"
                            onChange={e => setContact(e.target.value)}
                            required
                        />
                    </label>

                </div>
                <div className="row2">
                    <div className="gender">
                        <label htmlFor="gender">
                            Gender:
                        </label>
                        <div>
                            <label htmlFor="male">
                                <input id="male" name="gender" value="male" type="radio" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}
                                    required
                                />
                                Male
                            </label>
                            <label htmlFor="female">
                                <input id="female" name="gender" value="female" type="radio" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}
                                    required
                                />
                                Female
                            </label>
                            <label htmlFor="other">
                                <input id="other" name="gender" value="other" type="radio" checked={gender === "other"} onChange={(e) => setGender(e.target.value)}
                                    required
                                />Other
                            </label>
                        </div>
                    </div>
                    <div className="subject">
                        <label htmlFor="subject">
                            Your best Subject:
                        </label>
                        <div>
                            <label htmlFor="english">
                                <input id="english" name="subject" type="checkbox" checked={subject.english === true} onChange={(e) => handleChangeSubject("english")}
                                    required
                                />
                                English
                            </label>
                            <label htmlFor="math">
                                <input id="math" name="subject" type="checkbox" checked={subject.math === true} onChange={(e) => handleChangeSubject("math")}
                                    required
                                />
                                Math
                            </label>
                            <label htmlFor="physics">
                                <input id="physics" name="subject" type="checkbox" checked={subject.physics === true} onChange={(e) => handleChangeSubject("physics")}
                                    required
                                />
                                Physics
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row3">
                    <label htmlFor="resume">
                        Upload Resume:
                        <input
                            id="resume"
                            name="resume"
                            type="file"
                            onChange={e => setResume(e.target.files[0])}
                            required
                        />
                    </label>

                    <label htmlFor="url">Enter URL:
                        <input
                            id="url"
                            name="url"
                            placeholder="Ex. sample.com"
                            type="url"
                            onChange={e => setURL(e.target.value)}
                            required
                        />
                    </label>

                    <label htmlFor="choice">Select your choice
                        <select
                            name="select"
                            id="select"
                            value={choiceSelected}
                            onChange={e => setChoiceSelected(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select</option>
                            <optgroup label="Beginners">
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="javascript">Javascript</option>
                            </optgroup>
                            <optgroup label="Advance">
                                <option value="react">React</option>
                                <option value="node">Node</option>
                                <option value="express">Express</option>
                                <option value="mongodb">MongoDB</option>
                            </optgroup>
                        </select>
                    </label>

                    <label htmlFor="about">About:
                        <textarea
                            name="about"
                            id="about"
                            cols={30}
                            rows={10}
                            placeholder="About your self"
                            onChange={e => setAbout(e.target.value)}
                            required
                        ></textarea>
                    </label>

                </div>
                <div className="button-wrapper">
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >Reset</button>
                    <button
                        type="submit"
                        value="submit"
                        onClick={e => handleSubmit(e)}
                    >Submit</button>
                </div>

            </form>
        </fieldset>
    );
}

export default Content;