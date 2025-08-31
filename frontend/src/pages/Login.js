mport React, { useState } from 'react';
import API from '../services/api';


export default function Login() {
const [form, setForm] = useState({ email: '', password: '' });
const onSubmit = async e => {
e.preventDefault();
try {
const res = await API.post('/auth/login', form);
localStorage.setItem('token', res.data.token);
window.location = '/tasks';
} catch (err) {
alert(err.response?.data?.message || 'Login failed');
}
};
return (
<form onSubmit={onSubmit}>
<input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
<input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
<button type="submit">Login</button>
</form>
);
