import React, { useState } from 'react';
import API from '../services/api';


export default function Signup() {
const [form, setForm] = useState({ name: '', email: '', password: '' });
const onSubmit = async e => {
e.preventDefault();
try {
const res = await API.post('/auth/signup', form);
localStorage.setItem('token', res.data.token);
window.location = '/tasks';
} catch (err) {
alert(err.response?.data?.message || 'Signup failed');
}
};
return (
<form onSubmit={onSubmit}>
<input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
<input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
<input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
<button type="submit">Sign Up</button>
</form>
);
}
