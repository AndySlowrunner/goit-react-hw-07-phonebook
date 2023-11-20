import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter], (items, filters) => {
        return items.filter(item => item.name.toLowerCase()
            .includes(filters.toLowerCase()))
    });