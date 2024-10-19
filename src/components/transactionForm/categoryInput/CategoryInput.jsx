// base
import React from "react";
import { useParams } from "react-router";

// modal
import Modal from "../../modal/Modal";
import { useModal } from "../../hooks/useModal";

// form
import { Controller } from "react-hook-form";

// styled
import {
  StyledInputWrapper,
  StyledLabel,
  StyledCategoryInput,ß
} from "./CategoryInput.styled";
import {AllCategories} from "../../categories/allCategories/AllCategories";

const CategoryInput = ({ control, setValue, setCategoryId, type }) => {
  const { isOpened, openModal, closeModal } = useModal();
  const { transactionsType } = useParams();

  const handleSetCategory = (selectedCategory) => {
    setCategoryId(selectedCategory.id);
    setValue("category", selectedCategory);
  };

  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <StyledInputWrapper>
          <StyledLabel htmlFor="category">Category</StyledLabel>
          <StyledCategoryInput
            id="category"
            type="textarea"
            placeholder="Different"
            {...field}
            value={field.value}
            onClick={(event) => {
              openModal();
              event.target.blur();
            }}
          />
          {isOpened ? (
            <Modal
              children={
                <AllCategories
                  type={type ? type : transactionsType}
                  chooseCategories={handleSetCategory}
                  closeModal={closeModal}
                  setCategoryId={setCategoryId}
                />
              }
              closeModal={closeModal}
            />
          ) : null}
        </StyledInputWrapper>
      )}
    />
  );
};

export default CategoryInput;
