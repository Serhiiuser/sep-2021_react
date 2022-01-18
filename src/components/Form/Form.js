import {useState} from "react";

function Form() {
    const [form,setForm] = useState({name:'',username:'',email:''});
    const formHandler= (e)=>{
      const eventData= {...form,[e.target.name]:e.target.value}
        setForm({...form,...eventData})
    }

  return (
    <div>
        <form>
            <lable><input type="text" name={'name'} value={form.name} onChange={formHandler}/></lable>
            <lable><input type="text" name={'username'} value={form.username} onChange={formHandler}/></lable>
            <lable><input type="text" name={'email'} value={form.email} onChange={formHandler}/></lable>
        </form>
    </div>
  );
}

export default Form;