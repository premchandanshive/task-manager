import React, { useEffect, useState } from 'react';
import API from '../services/api';


export default function Tasks() {
const [tasks, setTasks] = useState([]);
const [title, setTitle] = useState('');
useEffect(() => { fetchTasks(); }, []);
const fetchTasks = async () => {
const res = await API.get('/tasks');
setTasks(res.data);
};
const addTask = async () => {
if (!title) return;
await API.post('/tasks', { title });
setTitle('');
fetchTasks();
};
const toggle = async (task) => {
