import React, { useContext, useEffect, useRef, useState } from 'react'
import { CreateProductContainer, DualColumn, ImageInput, MultiSelectDropDown, MultiSelectContainer, MultiSelectedItems, MultiSelectOption, ProductForm, ProductFormField, ProductFormImageInput, ProductUploadedImages, RadioInput, RemoveImage, UploadedImage, MultiSelectedOption, DynamicColumn } from './CreateProductStyles'
import { PageHeader } from '../../AppStyles'
import { UIContext } from '../../context/UIContext'
import { CiImageOn } from "react-icons/ci";
import { IoIosRemoveCircle } from "react-icons/io";
import axios from 'axios'

const CreateProduct = () => {

    const { darkMode } = useContext(UIContext)

    const [catDropdown, setCatDropdown] = useState(false);
    const [sizeDropdown, setSizeDropdown] = useState(false);
    const [materialsDropdown, setMaterialsDropdown] = useState(false);
    const [detailsDropdown, setDetailsDropdown] = useState(false);
    const [genderDropdown, setGenderDropdown] = useState(false);

    const [imageIndex, setImageIndex] = useState()
    const [loading, setLoading] = useState({});
    const [isDescImg, setIsDescImg] = useState(false);

    const [categories, setCategories] = useState(['Category 1', 'Category 2', 'Category 3', 'Category 4']);
    const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL', 'XXL']);
    const [materials, setMaterials] = useState(['Material 1', 'Material 2', 'Material 3', 'Material 4']);
    const [details, setDetails] = useState(['Detail 1', 'Detail 2', 'Detail 3', 'Detail 4'])

    const [images, setImages] = useState(["", "", "", ""]);
    const [isLimitedEdition, setIsLimitedEdition] = useState(false);
    const [descImg, setDescImg] = useState();
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([])
    const [selectedDetails, setSelectedDetails] = useState([])
    const [units, setUnits] = useState()
    const [gender, setGender] = useState("")
    const [name, setName] =useState("")
    const [subDesc, setSubDesc] = useState("")
    const [descTitle, setDescTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [color, setColor] = useState("")

    const genders = ["Male", "Female"]

    const handleSelect = (setFunc, existingArr, option, setDrop) => {
        setFunc([...existingArr, option]);
        setDrop(false); // Close dropdown after selection
    };

    const handleRemove = (setFunc, existingArr, option) => {
        setFunc(existingArr.filter(item => item !== option));
    };

    const fileInputRef = useRef(null)
    const descImgRef = useRef(null)

    const handleImageUpload = (event) => {
        console.log(imageIndex)
        const files = Array.from(event.target.files).slice(0, 4);
        files.forEach((file, index) => {
            const reader = new FileReader();
            reader.onloadstart = () => {
                setLoading((prev) => ({ ...prev, [index]: true }));
            };
            reader.onload = (e) => {
                const base64String = e.target.result;
                if (isDescImg) {
                    setDescImg({ base64: base64String, fileName: file.name });
                } else {
                    console.log(images)
                    setImages((prev) => {
                        const updatedImages = [...prev];
                        updatedImages[imageIndex] = base64String;
                        return updatedImages;
                    });
                }
                setLoading((prev) => ({ ...prev, [index]: false }));
            };
            reader.readAsDataURL(file);
        });
        event.target.value = "";
    };

    const handleImageDelete = (index) => {
        setImages((prev) => {
            const updatedImages = [...prev];
            updatedImages[index] = "";
            return updatedImages;
        });
    };

    const handleDescImgDelete = () => {
        setDescImg()
    }

    const triggerFileInput = () => {
        fileInputRef.current.click();
        console.log(imageIndex)
    };

    const triggerDescImgInput = () => {
        descImgRef.current.click();
    };

    const createProduct = async () => {
        try {
            await axios.post("http://localhost:5000/api/product/new-product",
                {
                    name: name,
                    subDesc: subDesc,
                    price: price,
                    color: color,
                    size: selectedSize,
                    units: units,
                    descriptionImage: descImg?.base64,
                    images: images,
                    limitedEdition: isLimitedEdition,
                    description: {
                        title: descTitle,
                        desc: desc
                    },
                    details: selectedDetails,
                    gender: gender,
                    categories: selectedCategories,
                    materials: selectedMaterials
                }
            ).then((res) => {
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     // getProducts()
    // })

    return (
        <CreateProductContainer>
            <PageHeader>
                <p>Create Product</p>
            </PageHeader>

            <ProductForm>
                <ProductFormField darkMode={darkMode}>
                    <label>Product Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g Extra-Mile Aero Sleeveless' name="" id="" />
                </ProductFormField>

                <ProductFormField darkMode={darkMode}>
                    <label>Sub Description</label>
                    <input type="text" value={subDesc} onChange={(e) => setSubDesc(e.target.value)} placeholder='e.g Extra-Mile Aero Sleeveless' name="" id="" />
                </ProductFormField>

                <ProductFormField darkMode={darkMode}>
                    <label>Description Title</label>
                    <input type="text" value={descTitle} onChange={(e) => setDescTitle(e.target.value)} placeholder='Enter description title' name="" id="" />
                </ProductFormField>

                <ProductFormField darkMode={darkMode}>
                    <label>Description</label>
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={10} placeholder='Enter product description' />
                </ProductFormField>

                <ProductFormField darkMode={darkMode}>
                    <label>Color</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='Enter description title' name="" id="" />
                </ProductFormField>

                <DualColumn>
                    <ProductFormField darkMode={darkMode}>
                        <label>Price</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='e.g 500' name="" id="" />
                    </ProductFormField>

                    <ProductFormField darkMode={darkMode}>
                        <label>Discount (%)</label>
                        <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder='e.g 5' name="" id="" />
                    </ProductFormField>
                </DualColumn>

                <ProductFormField>
                    <label>Description Image</label>
                    <ProductFormImageInput
                        onClick={!descImg?.base64 && triggerDescImgInput}
                    >
                        {descImg?.base64 ?
                            <>
                                <img src={descImg.base64} alt="" />
                                <RemoveImage onClick={() => handleDescImgDelete()}>
                                    <IoIosRemoveCircle />
                                </RemoveImage>
                            </>
                            :
                            <>
                                <CiImageOn />
                                <p>Click here to upload image</p>
                            </>
                        }
                    </ProductFormImageInput>
                </ProductFormField>

                <ProductFormField>
                    <label>Product Images</label>
                    <ProductUploadedImages>
                        {
                            images.map((image, index) => (
                                <ProductFormImageInput
                                    key={index}
                                    onClick={() => { image === "" && triggerFileInput(); setImageIndex(index) }}
                                >
                                    {
                                        image === "" ?
                                            <>
                                                <CiImageOn />
                                                <p>Click here to upload image</p>
                                            </>
                                            :
                                            <>
                                                <img src={image} alt="" />
                                                <RemoveImage onClick={() => handleImageDelete(index)}>
                                                    <IoIosRemoveCircle />
                                                </RemoveImage>
                                            </>
                                    }
                                </ProductFormImageInput>
                            ))
                        }
                    </ProductUploadedImages>
                </ProductFormField>

                <RadioInput>
                    <input type="checkbox" name="" id="" onChange={(e) => setIsLimitedEdition(e.target.checked)} />
                    <label>Limited Edition</label>
                </RadioInput>

                <DynamicColumn>
                    <ProductFormField>
                        <label>Categories</label>

                        <MultiSelectContainer>
                            <MultiSelectedItems>
                                {
                                    selectedCategories.length !== 0 ? selectedCategories.map((item, index) => (
                                        <MultiSelectedOption darkMode={darkMode} key={index}>
                                            {item}
                                            <RemoveImage onClick={() => handleRemove(setSelectedCategories, selectedCategories, item)}>
                                                <IoIosRemoveCircle />
                                            </RemoveImage>
                                        </MultiSelectedOption>
                                    ))
                                        :
                                        <p>No category selected</p>
                                }
                            </MultiSelectedItems>
                            <MultiSelectDropDown darkMode={darkMode}>
                                <p onClick={() => setCatDropdown(!catDropdown)}>Select --</p>

                                {catDropdown && (
                                    <div>
                                        {categories.map((option, index) => (
                                            <MultiSelectOption
                                                key={index}
                                                onClick={() => !selectedCategories.includes(option) && handleSelect(setSelectedCategories, selectedCategories, option, setCatDropdown)}
                                                selected={selectedCategories.includes(option)}
                                            >
                                                {option}
                                            </MultiSelectOption>
                                        ))}
                                    </div>
                                )}
                            </MultiSelectDropDown>
                        </MultiSelectContainer>
                    </ProductFormField>

                    <ProductFormField>
                        <label>Gender</label>

                        <MultiSelectContainer>
                            <MultiSelectedItems>
                                {gender !== "" ?
                                    <p>{gender}</p>
                                    :
                                    <p>No gender selected</p>
                                }
                            </MultiSelectedItems>
                            <MultiSelectDropDown darkMode={darkMode}>
                                <p onClick={() => setGenderDropdown(!genderDropdown)}>Select --</p>

                                {genderDropdown && (
                                    <div>
                                        {genders.map((option, index) => (
                                            <MultiSelectOption
                                                key={index}
                                                onClick={() => { setGenderDropdown(false); gender !== option && setGender(option) }}
                                                selected={gender === option}
                                            >
                                                {option}
                                            </MultiSelectOption>
                                        ))}
                                    </div>
                                )}
                            </MultiSelectDropDown>
                        </MultiSelectContainer>
                    </ProductFormField>

                    <ProductFormField>
                        <label>Materials</label>

                        <MultiSelectContainer>
                            <MultiSelectedItems>
                                {
                                    selectedMaterials.length !== 0 ? selectedMaterials.map((item, index) => (
                                        <MultiSelectedOption darkMode={darkMode} key={index}>
                                            {item}
                                            <RemoveImage onClick={() => handleRemove(setSelectedMaterials, selectedMaterials, item)}>
                                                <IoIosRemoveCircle />
                                            </RemoveImage>
                                        </MultiSelectedOption>
                                    ))
                                        :
                                        <p>No material selected</p>
                                }
                            </MultiSelectedItems>
                            <MultiSelectDropDown darkMode={darkMode}>
                                <p onClick={() => setMaterialsDropdown(!materialsDropdown)}>Select --</p>

                                {materialsDropdown && (
                                    <div>
                                        {materials.map((option, index) => (
                                            <MultiSelectOption
                                                key={index}
                                                onClick={() => !selectedMaterials.includes(option) && handleSelect(setSelectedMaterials, selectedMaterials, option, setMaterialsDropdown)}
                                                selected={selectedMaterials.includes(option)}
                                            >
                                                {option}
                                            </MultiSelectOption>
                                        ))}
                                    </div>
                                )}
                            </MultiSelectDropDown>
                        </MultiSelectContainer>
                    </ProductFormField>

                    <ProductFormField>
                        <label>Details</label>

                        <MultiSelectContainer>
                            <MultiSelectedItems>
                                {
                                    selectedDetails.length !== 0 ? selectedDetails.map((item, index) => (
                                        <MultiSelectedOption darkMode={darkMode} key={index}>
                                            {item}
                                            <RemoveImage onClick={() => handleRemove(setSelectedDetails, selectedDetails, item)}>
                                                <IoIosRemoveCircle />
                                            </RemoveImage>
                                        </MultiSelectedOption>
                                    ))
                                        :
                                        <p>No detail selected</p>
                                }
                            </MultiSelectedItems>
                            <MultiSelectDropDown darkMode={darkMode}>
                                <p onClick={() => setDetailsDropdown(!detailsDropdown)}>Select --</p>

                                {detailsDropdown && (
                                    <div>
                                        {details.map((option, index) => (
                                            <MultiSelectOption
                                                key={index}
                                                onClick={() => !selectedDetails.includes(option) && handleSelect(setSelectedDetails, selectedDetails, option, setDetailsDropdown)}
                                                selected={selectedDetails.includes(option)}
                                            >
                                                {option}
                                            </MultiSelectOption>
                                        ))}
                                    </div>
                                )}
                            </MultiSelectDropDown>
                        </MultiSelectContainer>
                    </ProductFormField>

                    <ProductFormField>
                        <label>Size</label>

                        <MultiSelectContainer>
                            <MultiSelectedItems>
                                {selectedSize !== "" ?
                                    <p>{selectedSize}</p>
                                    :
                                    <p>No size selected</p>
                                }
                            </MultiSelectedItems>
                            <MultiSelectDropDown darkMode={darkMode}>
                                <p onClick={() => setSizeDropdown(!sizeDropdown)}>Select --</p>

                                {sizeDropdown && (
                                    <div>
                                        {sizes.map((option, index) => (
                                            <MultiSelectOption
                                                key={index}
                                                onClick={() => { setSizeDropdown(false); selectedSize !== option && setSelectedSize(option) }}
                                                selected={selectedSize === option}
                                            >
                                                {option}
                                            </MultiSelectOption>
                                        ))}
                                    </div>
                                )}
                            </MultiSelectDropDown>
                        </MultiSelectContainer>
                    </ProductFormField>

                    <ProductFormField darkMode={darkMode}>
                        <label>Units</label>
                        <input type="number" placeholder='Number of units' value={units} onChange={(e) => setUnits(e.target.value)} name="" id="" />
                    </ProductFormField>
                </DynamicColumn>

            </ProductForm>

            <PageHeader>
                <button className='submit' onClick={createProduct}>Submit</button>
            </PageHeader>

            <ImageInput
                type="file"
                accept="image/*"
                onChange={(e) => { handleImageUpload(e) }}
                onClick={() => setIsDescImg(true)}
                disabled={descImg}
                ref={descImgRef}
            />

            <ImageInput
                type="file"
                accept="image/*"
                onChange={(e) => { handleImageUpload(e); console.log("clicked") }}
                onClick={() => setIsDescImg(false)}
                ref={fileInputRef}
            />
        </CreateProductContainer>
    )
}

export default CreateProduct
