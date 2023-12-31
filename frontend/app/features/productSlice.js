const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : "https://ecommerce-backend-0zbt.onrender.com"

const initialState = {
  top3: [],
  featured: [],
  all: [],
  product: [],
  error: null,
  loading: false
}

export const getTop3 = createAsyncThunk('product/top3', async () => {
  try {
    const res = await fetch(`${baseUrl}/api/products/limit/3`, { cache: "no-store" });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
})

export const getFeatured = createAsyncThunk('product/featured', async () => {
  try {
    const res = await fetch(`${baseUrl}/api/products/limit/4`, { cache: "no-store" });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
})

export const getAll = createAsyncThunk('product/all', async () => {
  try {
    const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
})

export const getSingleProduct = createAsyncThunk('product/getsingle', async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/products/get/${id}`, { cache: "no-store" });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
})

export const getProductByCategory = createAsyncThunk('product/bycategory', async (cat) => {
  try {
    const res = await fetch(`${baseUrl}/api/products/category/${cat}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clear: (state) => {
      state = initialState;
    }
  },
  extraReducers: builder => {
    //Fulfilled Actions
    builder.addCase(getTop3.fulfilled, (state, action) => {
      state.loading = false;
      state.top3 = action.payload;
    })
    
    builder.addCase(getFeatured.fulfilled, (state, action) => {
      state.loading = false;
      state.featured = action.payload;
    })
    
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      return { ...state, all: action.payload };
    })
    
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.product = "";
      state.loading = false;
      state.product = action.payload;
    })
    
    builder.addCase(getProductByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.all = action.payload;
    })
    
    //Pending Actions
    builder.addCase(getTop3.pending, (state) => {
      state.loading = true;
    })
    
    builder.addCase(getFeatured.pending, (state) => {
      state.loading = true;
    })
    
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    })
    
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
    })
    
    builder.addCase(getProductByCategory.pending, (state) => {
      state.loading = true;
    })
    
    //Rejected Actions
    builder.addCase(getTop3.rejected, (state, action) => {
      state.loading = false;
      return { ...state, error: action.payload.error };
    })
    
    builder.addCase(getFeatured.rejected, (state, action) => {
      state.loading = false;
      return { ...state, error: action.payload.error };
    })
    
    builder.addCase(getAll.rejected, (state, action) => {
      state.loading = false;
      return { ...state, error: action.payload.error };
    })
    
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.loading = false;
      return { ...state, error: action.payload.error };
    })
    
    builder.addCase(getProductByCategory.rejected, (state, action) => {
      state.loading = false;
      return { ...state, error: action.payload.error };
    })
  }
})

export const { clear } = productSlice.actions;
export default productSlice.reducer;