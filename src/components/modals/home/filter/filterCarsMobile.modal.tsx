import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { contextHomeProvider } from "../../../../context/homePage.context";
import {
  BrandFilter,
  ColorFilter,
  FuelFilter,
  ModelFilter,
  YearFilter,
} from "./sectionsFilter";
import { useState } from "react";
import { ButtonFilter, ButtonFilterMobile } from "./buttonFilter";

interface iStatusModal {
  isOpen: boolean;
  onClose(): void;
}

const ModalFilterMobile = ({ isOpen, onClose }: iStatusModal) => {
  
  const {
    brands,
    colors,
    fuels,
    models,
    years,
    setFuelSelected,
    setModelSelected,
    setYearSelected,
    setColorSelected,
    setBrandSelected,
    brandSelected,
    modelSelected,
    yearSelected,
    colorSelected,
    fuelSelected,
    filterCarList,
    isFilter,
    carAd,
    filterOptionsMenu,
    setMaxKm,
    setMinKm,
    setMinPrice,
    setMaxPrice,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
    setIsFilter,
    clearFilter,
    isInputFilter,
    inputStatus,
    FilterInputs,
    filteredAlready, 
    setFilteredAlready,
    filteredCars
  } = useContext(contextHomeProvider);

  useEffect(() => {
    filterCarList();
    filterOptionsMenu();
    FilterInputs()
  }, [
    isOpen,
    carAd,
    isFilter,
    isInputFilter,
    brandSelected,
    modelSelected,
    yearSelected,
    colorSelected,
    fuelSelected,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
  ]);

  return (
    <Drawer 
      onClose={onClose} 
      isOpen={isOpen} 
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton marginTop="6px" />
        <Text
          color="grey.1"
          marginLeft="15px"
          marginTop="20px"
          fontWeight="600"
        >
          Filtro
        </Text>
          <DrawerBody>
            <Box marginLeft="-25px">

              <DrawerHeader>Marca</DrawerHeader>

              <BrandFilter
                brandSelected={brandSelected}
                isFilter={isFilter}
                filterOptionsMenu={filterOptionsMenu}
                setBrandSelected={setBrandSelected}
                brands={brands}
                setIsFilter={setIsFilter}
                filterCarList={filterCarList}
              />

            </Box>
            <Box marginLeft="-25px">

              <DrawerHeader>Modelo</DrawerHeader>

              <ModelFilter
                modelSelected={modelSelected}
                isFilter={isFilter}
                setModelSelected={setModelSelected}
                filterOptionsMenu={filterOptionsMenu}
                models={models}
                setIsFilter={setIsFilter}
              />

            </Box>
            <Box marginLeft="-25px">

              <DrawerHeader>Cor</DrawerHeader>

              <ColorFilter
                isFilter={isFilter}
                setColorSelected={setColorSelected}
                colorSelected={colorSelected}
                filterOptionsMenu={filterOptionsMenu}
                colors={colors}
                setIsFilter={setIsFilter}
              />

            </Box>
            <Box marginLeft="-25px">

              <DrawerHeader>Ano</DrawerHeader>

              <YearFilter
                yearSelected={yearSelected}
                isFilter={isFilter}
                setYearSelected={setYearSelected}
                filterOptionsMenu={filterOptionsMenu}
                years={years}
                setIsFilter={setIsFilter}
              />

            </Box>
            <Box marginLeft="-25px">
              <DrawerHeader>Combustível</DrawerHeader>

              <FuelFilter
                fuelSelected={fuelSelected}
                isFilter={isFilter}
                setFuelSelected={setFuelSelected}
                filterOptionsMenu={filterOptionsMenu}
                fuels={fuels}
                setIsFilter={setIsFilter}
              />

            </Box>
            <Box marginLeft="-25px" marginTop="35px">

              <DrawerHeader>KM</DrawerHeader>

              <Box marginLeft="30px" display="flex">

                <Input
                  w="120px"
                  marginRight="25px"
                  borderRadius="0px"
                  bgColor="grey.5"
                  borderColor="grey.5"
                  placeholder="Mínima"
                  fontWeight="600"
                  color="grey.1"
                  focusBorderColor="grey.5"
                  type="number"
                  value={minKm}
                  onChange={(event) => {
                    setMinKm(event.target.value);
                    inputStatus(event.target.value, minKm);
                  }}
                />
                <Input
                  w="120px"
                  borderRadius="0px"
                  bgColor="grey.5"
                  borderColor="grey.5"
                  placeholder="Máxima"
                  fontWeight="600"
                  color="grey.1"
                  focusBorderColor="grey.5"
                  type="number"
                  value={maxKm}
                  onChange={(event) => {
                    setMaxKm(event.target.value);
                    inputStatus(event.target.value, maxKm);
                  }}
                />
              </Box>

            </Box>
            <Box marginLeft="-25px" marginTop="35px">

              <DrawerHeader>Preço</DrawerHeader>

              <Box marginLeft="30px" display="flex">

                <Input
                  w="120px"
                  marginRight="25px"
                  borderRadius="0px"
                  bgColor="grey.5"
                  borderColor="grey.5"
                  placeholder="Mínimo"
                  fontWeight="600"
                  color="grey.1"
                  focusBorderColor="grey.5"
                  type="number"
                  value={minPrice}
                  onChange={(event) => {
                    setMinPrice(event.target.value);
                    inputStatus(event.target.value, minPrice);
                  }}
                />

                <Input
                  w="120px"
                  borderRadius="0px"
                  bgColor="grey.5"
                  borderColor="grey.5"
                  placeholder="Máximo"
                  fontWeight="600"
                  color="grey.1"
                  focusBorderColor="grey.5"
                  type="number"
                  value={maxPrice}
                  onChange={(event) => {
                    setMaxPrice(event.target.value);
                    inputStatus(event.target.value, maxPrice);
                  }}
                />
                
              </Box>

            </Box>
            
            <ButtonFilterMobile
              isFilter={isFilter}
              isInputFilter={isInputFilter}
              clearFilter={clearFilter}
              onClose={onClose}
              isOpen={isOpen}
              filteredAlready={filteredAlready}
              setFilteredAlready={setFilteredAlready}
              filteredCars={filteredCars}
            />

          </DrawerBody>
      </DrawerContent>
    </Drawer>
  )

};

export default ModalFilterMobile;
