import React,{useEffect,useState}  from 'react';
import PropTypes from 'prop-types';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import {Form,Drawer,Tag, Button,Col,Checkbox, Input,Modal, Select,Upload, notification,InputNumber,Row} from 'antd'
import {getMenu,KeyNsxProduct} from '../../../../featuresReducer/menu/pathAPI'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { PlusOutlined } from "@ant-design/icons";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SizeProduct from './SizeProduct';

AddProduct.propTypes = {
    
};

function AddProduct(props) {
  function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
  }
    const [form] = Form.useForm();
    const listmenu=useSelector(state=>state.menu.listMenu);
    const listKeyProduct=useSelector(state=>state.menu.listKeyProduct);
    const [fileListImage, setFileListImage] = useState([]);
    const [previewImage, setPreviewImage] = useState("");
    const [inputVisible, setInputVisible] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [colorDefault, setColorDefault] = useState([]);
    const [descriptionProduct, setDiscriptionProduct] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [id_product,set_id_product]=useState("");
    const dispatch=useDispatch();

    

    const onFinish=()=>{
        alert(123)
    }
    const ChangeValueKeyProduct=(e)=>{
     
              dispatch(KeyNsxProduct({key:e}))
    }

    const actionLismenu=()=>{
      dispatch(getMenu())
    }

    //image
    const handlePreview = async (file) => {
      try {
          if (!file.url && !file.preview) {
              file.preview = await getBase64(file.originFileObj);
          }
          setPreviewImage(file.url || file.preview);
          setPreviewVisible(true);
      } catch (error) {
          console.log(error);
      }
  };

  const handleChange = (f) => {
    const { file, fileList, event } = f;
    let isJpgOrPng =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg";
    let isLt2M = file.size / 1024 / 1024 < 2;
   if (id_product) {
        //---------------delete image---------------
        if (
            (file && fileList.length === 0) ||
            (file && fileList.length > 0 && !event)
        ) {
            const newImage = [...fileListImage];
            const index = newImage.findIndex(
                (image) => image.id === file.id
            );
            newImage.splice(index, 1);
            setFileListImage(newImage);
        }
        //---------------add image---------------
        if (fileList.length > 0 && event) {
            if (!isJpgOrPng) {
                notification["error"]({
                    message: "Thông Báo",
                    description:
                        "Bạn chỉ có thể tải lên tệp JPG / PNG / JPEG !",
                });
            }
            if (!isLt2M) {
                notification["error"]({
                    message: "Thông báo",
                    description: "Hình ảnh phải nhỏ hơn 2MB ",
                });
            }
        }
        if (isLt2M && isJpgOrPng) {
            setFileListImage(fileList);
        }
      }
    if (!id_product) {
        if (!isJpgOrPng) {
            notification["error"]({
                message: "Thông Báo",
                description:
                    "Bạn chỉ có thể tải lên tệp JPG / PNG / JPEG !",
            });
        }
        if (!isLt2M) {
            notification["error"]({
                message: "Thông báo",
                description: "Hình ảnh phải nhỏ hơn 2MB ",
            });
        }
        if (isLt2M && isJpgOrPng) {
            setFileListImage(fileList);
        }
    }
};
//color
      const onCloseColor = (color) => {
        console.log(color);
        const newColor = colorDefault.filter((tag) => tag !== color);
        setColorDefault(newColor);
      };
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
      if (inputValue && colorDefault.indexOf(inputValue) === -1) {
          setColorDefault([...colorDefault, inputValue]);
          setInputValue("");
          setInputVisible(false);
      } else {
          setInputVisible(false);
          setInputValue("");
      }
  };

    useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
      actionLismenu();
    },[])
    

    
    
    return (
        <div className='group-product-admin'>
            <div className='group-product-admin-title d-flex items-center '>
                <img src="https://cdn-icons-png.flaticon.com/128/1524/1524855.png" className='img_menu_admin_product bg-white shadow-md p-2 rounded-md'/> 
                <div className='group-product-admin-title-search'>
                    <h5 className='cl-titleProduct'>Quản Lý Sản Phẩm  </h5>
                    <p className='text-Gray1'>Thêm sản phẩm </p>
                </div>
            </div>
            <div className='p-3 group-product-admin-addProduct-content shadow-md'>
                <h6 className='text-start cl-titleProduct mt-2  mb-5'>THÔNG TIN SẢN PHẨM CẦN THÊM  </h6>
                 <div className='group-product-admin-addProduct-content-form'>
                 <Form form={form} 
                   onFinish={onFinish}
                   layout="vertical"
                 >
                    
                    <Row justify='center' gutter={16}>

                      <Col className='gutter-row ' xs={24} sm={12} md={12} lg={12} >
                           <Form.Item
                          name="name"
                          label="Tên sản phẩm"
                          hasFeedback
                          rules={[{required: true, message: 'Vui lòng nhập'}]}
                           >
                                <Input placeholder='Tên sản phẩm' />
                           </Form.Item>
                      </Col>

                      <Col className='gutter-row' xs={24} sm={12} md={12} lg={12} >
                           <Form.Item
                                name="price"
                                label="Giá sản phẩm"
                                hasFeedback
                                rules={[{required:true,message:'Vui lòng nhập'}]}
                            >
                                  <Input placeholder='Giá sản phẩm' />  
                           </Form.Item>
                      </Col>
                     <Col className='gutter-row ' xs={24} sm={12} md={12} lg={12} >
                            <Form.Item
                                name="sex"
                                label="Giới tính"
                                hasFeedback
                                rules={[{required:true,message:'Vui lòng nhập'}]}
                            >
                                <Select
                                 showSearch showArrow placeholder="Chọn giới tính">
                                    <Select.Option value="Nam">Nam</Select.Option>
                                    <Select.Option value="Nữ">Nữ</Select.Option>
                                    <Select.Option value="Nam,Nữ">Nam và Nữ</Select.Option>
                                </Select>

                            </Form.Item>
                      </Col>
                      <Col className='gutter-row ' xs={24} sm={12} md={12} lg={12} >
                            <Form.Item
                                name="key"
                                label="Nhà sản xuất"
                                hasFeedback
                                rules={[{required:true,message:'Vui lòng nhập'}]}
                            >
                                <Select  onChange={ChangeValueKeyProduct} showSearch showArrow placeholder="Chọn nhà sản xuất">
                                      {listmenu.keyProduct&&listmenu.keyProduct.map((item,index)=>
                                     (
                                      <Select.Option key={index} value={item}>{item}</Select.Option>
                                     )

                                     )} 
                                </Select>
                            </Form.Item>
                      </Col>

                      <Col className='gutter-row' xs={24} sm={12} md={12} lg={12} >
                        <Form.Item
                            name="NSX"
                            label="Dòng sản phẩm"
                            hasFeedback 
                            rules={[{required:true,message:'Vui lòng nhập'}]}  
                        >
                          <Select showArrow showSearch placeholder="Chọn dòng sản phẩm ">
                            {listKeyProduct&&listKeyProduct.map(
                              (item,index)=>(
                                <Select.Option key={index} value={item}>{item}</Select.Option>
                              )
                            )}
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col className='gutter-row' xs={24} sm={12} md={12} lg={12}>
                        <Form.Item
                            name="productType"
                            label="Loại sản phẩm"
                            hasFeedback
                            rules={[{required:true,message:'Vui lòng nhập'}]}
                        >
                          <Input placeholder='Loại sản phẩm' />
                        </Form.Item>
                      </Col> 

                      <Col className='gutter-row' xs={24} sm={12} md={12} lg={12}>
                        <Form.Item
                            name="quantity"
                            label="Số lượng"
                            hasFeedback
                            rules={[{required:true,message:'Vui lòng nhập'}]}
                        >                           
                           <Input placeholder='Số lượng' />
                        </Form.Item>
                      </Col>


                      <Col className='gutter-row' xs={24} sm={24} md={12} lg={12} >
                        <Form.Item 
                            name="collections"
                            label="Bộ sưu tập"
                            hasFeedback
                            rules={[{required:true,message:'Vui lòng nhập'}]}
                          >
                            <Input placeholder='Bộ sưu tập' />

                        </Form.Item>
                      </Col>                   

                    <Col className='gutter-row' xs={24} sm={24} md={24} lg={24} >
                        <Form.Item 
                            name="description"
                            label="Mô tả sản phẩm "
                            hasFeedback
                            rules={[{required:descriptionProduct.length==0?true:false,message:'Vui lòng nhập'}]}
                          >
                            <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onReady={ editor => {  } }
                                onChange={ ( event, editor ) => {
                                const data = editor.getData();                             
                                setDiscriptionProduct(data)
                              }}
                            />
                        </Form.Item>
                   </Col>  


                   <Col  className='gutter-row '  xs={24} sm={24} md={24} lg={24} >
                        <Form.Item 
                            name="poster"
                            label="Tải ảnh sản phẩm"
                            hasFeedback
                            rules={[{required:fileListImage.length<1||fileListImage.length<4?true:false,message:'Vui lòng tải 4 ảnh  lên'}]}
                        className="d-flex justify-center text-center"
                        >
                        
                            <Upload
                                    listType="picture-card"
                                    accept=".jpg, .jpeg, .png"
                                    fileList={fileListImage}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    maxCount={4}
                                    multiple
                                    className='upload-list-file'
                                  
                                >
                                    {fileListImage.length >= 4 ? null : (
                                        <div>
                                            <PlusOutlined />
                                            <div style={{ marginTop: 8 }}>Tải ảnh lên</div>
                                        </div>
                                    )}
                            </Upload>
                        
                          
                {/* <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={() => {
                        setPreviewVisible(false);
                    }}
                >
                    <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage}
                    />
                </Modal> */}
                        </Form.Item>
                  </Col> 

                 <Col justify="center" className='gutter-row text-center' xs={24} sm={24} md={24} lg={24} >
                    <Form.Item
                          className='text-center'
                            label="Màu Sắc"
                            hasFeedback
                            name="color"
                            rules={[
                                {
                                    required: colorDefault.length < 1 ? true : false,
                                    message: "Vui lòng thêm màu cho sản phẩm !",
                                },
                            ]}
                       >
                        <div className='d-flex justify-center '>
                            {colorDefault.map((color, index) => (
                                <Tag
                                    className='tag-color'
                                    key={index}
                                    closable
                                    onClose={() => onCloseColor(color)}
                                    color="orange"
                                >
                                    {color}
                                </Tag>
                            ))}
                            {inputVisible && colorDefault.length < 5 && (
                                <Input
                                    type="text"
                                    size="small"
                                    className='input-color '
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputConfirm}
                                    onPressEnter={handleInputConfirm}
                                />
                            )}
                            {!inputVisible && colorDefault.length < 5 && (
                                <Tag
                                    className="site-tag-plus"
                                    onClick={() => {
                                        setInputVisible(true);
                                    }}
                                >
                                    <PlusOutlined /> Thêm màu
                                </Tag>
                            )}
                        </div>
                   </Form.Item>
 
                 </Col>
            


                <Col  className='gutter-row '  justify='center' xs={24} sm={24} md={24} lg={24}  >
                        <Form.Item
                            className='text-center'
                            name="size"
                            label="Kích thước"
                            hasFeedback
                            rules={[{required:true,message:'Vui lòng nhập'}]}
                        >
                           <Checkbox.Group  
                              className='d-flex justify-center'
                           >
                             <Row  span ={24}>
                                {SizeProduct&&SizeProduct.map((item,index)=>(
                                    <Col    
                                        span={8}
                                        key={index}
                                        className="d-flex justify-center"
                                    >
                                    <Checkbox
                                        key={index}
                                        value={item.value}
                                       >{item.size}
                                    </Checkbox>
                                    </Col>
                                    ))}
                             </Row>                         
                          </Checkbox.Group>
                          </Form.Item>
                </Col>                                       
                    </Row>

                <Col span={24} className="itemFormsubmit">
                   
                            
                            <Button className='btn_submit'  htmlType='submit'>+ Thêm Sản Phẩm </Button>
                    
                </Col>
                    


                 </Form>
                   
                 </div>           
            </div>
      
            
        </div>
    );
}

export default AddProduct;