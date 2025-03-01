import guest_route from "./routes/guest_route.js"
import auth_route from "./routes/auth_route.js"
import fs from "fs"

const sessions_path = './data/sessions.json'
const users_path = './data/users.json'
const postsPath = './data/posts.json'
const comments_path = './data/comments.json'

// Sessions

export function loadSessions() {
    if (!fs.existsSync(sessions_path)) {
        fs.writeFileSync(sessions_path, JSON.stringify({}), "utf-8");
    }
    try {
        const data = fs.readFileSync(sessions_path, "utf-8");
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error("Error reading sessions file:", error);
        return {};
    }
}

export function saveSessions(sessions) {
    fs.writeFileSync(sessions_path, JSON.stringify(sessions, null, 4), "utf-8");
}

export function createSession(Req, key, value) {
    let sessions = loadSessions();
    const sessionId = Req.sessionID || generateSessionId();
    
    if (!sessions[sessionId]) {
        sessions[sessionId] = {};
    }
    
    sessions[sessionId][key] = value;
    saveSessions(sessions);

    Req.sessionID = sessionId; 
}

function generateSessionId() {
    return Math.random().toString(36).substr(2, 9);
}

export function checkIfSigned(Req){
    let sessions = loadSessions();
    return sessions[Req.sessionID]?.user || null;
}

export function getRoutes(Req, Res, Next){
    if(checkIfSigned(Req)){
        return auth_route(Req, Res, Next)
    }else{
        return guest_route(Req, Res, Next)
    }
}

// Users

export function loadUsers() {
    if (!fs.existsSync(users_path)) {
        fs.writeFileSync(users_path, JSON.stringify([]), "utf-8");
    }
    try {
        const data = fs.readFileSync(users_path, "utf-8");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error reading users file:", error);
        return [];
    }
}

export function saveUsers(users) {
    fs.writeFileSync(users_path, JSON.stringify(users, null, 4), "utf-8");
}

export function checkUserExists(username) {
    let users = loadUsers();
    return users.some(user => user.username === username);
}

export function addUser(username) {
    let users = loadUsers();
    users.push({ username });
    saveUsers(users);
}

// Posts

export function loadPosts(){
    if (!fs.existsSync(postsPath)) {
        fs.writeFileSync(postsPath, JSON.stringify([]), "utf-8");
    }
    try {
        const data = fs.readFileSync(postsPath, "utf-8");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error reading posts file:", error);
        return [];
    }
}

export function savePosts(posts){
    fs.writeFileSync(postsPath, JSON.stringify(posts, null, 4), "utf-8")
}

// comments 

export function loadComments(){
    if (!fs.existsSync(comments_path)) {
        fs.writeFileSync(comments_path, JSON.stringify([]), "utf-8");
    }
    try {
        const data = fs.readFileSync(comments_path, "utf-8");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error reading comments file:", error);
        return [];
    }
}

export function saveComments(comments){
    fs.writeFileSync(comments_path,JSON.stringify(comments, null, 4), "utf-8")
}