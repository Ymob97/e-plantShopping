import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // tableau des articles du panier
  },

  reducers: {
    // Ajouter un article au panier
    addItem: (state, action) => {
      const newItem = action.payload; // la plante envoyée depuis ProductList

      // Vérifier si l’article existe déjà
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        // si l’article existe, on augmente juste la quantité
        existingItem.quantity += 1;
      } else {
        // Sinon, on ajoute l’article avec quantity: 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Supprimer un article par son nom
    removeItem: (state, action) => {
      const nameToRemove = action.payload;

      // On garde tout sauf l’article à supprimer
      state.items = state.items.filter((item) => item.name !== nameToRemove);
    },

    // Mettre à jour la quantité d’un article
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // On trouve l’article concerné
      const item = state.items.find((item) => item.name === name);

      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Export des actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export du reducer pour store.js
export default CartSlice.reducer;
