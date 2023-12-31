"use client"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : "https://ecommerce-backend-0zbt.onrender.com"

const initialState = {
  user: typeof window !== undefined && JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {
    id: "",
    name: "",
    username: "",
    email: ""
  },
  token: typeof window !== undefined && JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : "",
  isLogin: typeof window !== undefined &&  JSON.parse(localStorage.getItem('token')) ? true : false,
  error: null
}

export const login = createAsyncThunk('user/login', async (cred) => {
  const res = await fetch(`${baseUrl}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      uname: cred.uname,
      pass: cred.pass
    })
  });
  const data = await res.json();
  if (data.err) {
    throw new Error(data.err);
  }
  return data;
});

export const register = createAsyncThunk('user/register', async (cred) => {
  try {
    const res = await fetch(`${baseUrl}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        uname: cred.uname,
        pass: cred.pass,
        email: cred.email
      })
    });
    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = null;
      state.isLogin = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    })

    builder.addCase(register.fulfilled, (state, action) => {
      state.error = null;
      state.isLogin = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    })

    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
    })

    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;