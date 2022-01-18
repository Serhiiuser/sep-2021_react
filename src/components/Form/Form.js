import {useState} from "react";

function Form(getFilter) {
    const [form,setForm] = useState({name:'',username:'',email:''});

    const formHandler= (e) => {
      const eventData= {...form,[e.target.name]:e.target.value}
        setForm({...form, ...eventData})
        getFilter(eventData)
    }

  return (
    <div>
        <form>
            <lable>Name:<input type="text" name={'name'} value={form.name} onChange={formHandler}/></lable>
            <lable>Username:<input type="text" name={'username'} value={form.username} onChange={formHandler}/></lable>
            <lable>Email:<input type="text" name={'email'} value={form.email} onChange={formHandler}/></lable>
        </form>
    </div>
  );
}

export default Form;