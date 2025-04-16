// 1. e.target.[name of input field].value [form onSubmit() event handler][SimpleForm.jsx]
// 2. use form action and formdata in action handler. form.get(name of input field)[FormAction.jsx]
// 3. use controlled component. one per each field. [ControlledField.jsx]
// 3. handle all controlled field on one state object const [formData, setFormData] = useState({
//     name: '',
//     password: '', 
//     email: ''
// })  
    // 4. uncontrolled using useref 

    // 5. use custom hook