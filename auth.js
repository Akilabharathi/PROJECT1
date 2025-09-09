// Very small client-side "auth" for demo only (not secure).
function getUsers(){
  return JSON.parse(localStorage.getItem('users') || '[]');
}
function saveUsers(arr){
  localStorage.setItem('users', JSON.stringify(arr));
}
function registerUser(email, password){
  if(!email || !password) return { success:false, error:'Provide email and password' };
  const users = getUsers();
  if(users.find(u => u.email === email)) return { success:false, error:'User already exists' };
  users.push({ email, password }); // plain text for demo only
  saveUsers(users);
  return { success:true };
}
function loginUser(email, password){
  const users = getUsers();
  const found = users.find(u => u.email === email && u.password === password);
  if(found){
    localStorage.setItem('loggedInUser', email);
    return true;
  }
  return false;
}
function getLoggedInUser(){
  return localStorage.getItem('loggedInUser');
}
function logout(){
  localStorage.removeItem('loggedInUser');
}
