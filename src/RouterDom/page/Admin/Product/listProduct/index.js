import React, { useEffect,useState,useRef } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import { useSelector,useDispatch } from 'react-redux';
import {GetProductAll} from '../../../../../featuresReducer/Product/ProductAll/pathApi'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'

ListProduct.propTypes = {
    
};

function ListProduct(props) {
    const listProductByPage =useSelector((state)=>state.productAll.ProductSlice)
    const totalAllListProduct=useSelector((state)=>state.productAll.ProductAll)
    const fomat=new Intl.NumberFormat('vn')
    const dispatch=useDispatch();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };
    
    useEffect(()=>{
       dispatch(GetProductAll({}));
    },[])

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
                  ref={searchInput}
                  placeholder={`Search ${dataIndex}`}
                  value={selectedKeys[0]}
                  onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                  onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                  style={{
                    marginBottom: 8,
                    display: 'block',
                  }}
            />
            <Space>
              <Button
                  type="primary"
                  onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                  icon={<SearchOutlined />}
                  size="small"
                  style={{
                    width: 90,
                  }}
              >
                Search
              </Button>
              <Button
                  onClick={() => clearFilters && handleReset(clearFilters)}
                  size="small"
                  style={{
                    width: 90,
                  }}
              >
                Reset
              </Button>
              <Button
                  type="link"
                  size="small"
                  onClick={() => {
                    confirm({
                      closeDropdown: false,
                    });
                    setSearchText(selectedKeys[0]);
                    setSearchedColumn(dataIndex);
                  }}
              >
                Filter
              </Button>
              <Button
                  type="link"
                  size="small"
                  onClick={() => {
                    close();
                  }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1890ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    const columns= [
         {
            title: 'STT',
            key: 'sno',
            width: '20px',
            render: (text, object, index) =>{return  index + 1}
        },
       
        {
            title: 'Ảnh',
            dataIndex: 'poster',
            key: 'poster',
            width: '20%',
            render: (name,record) =>
             <p className='text-Gray1 d-flex items-center gap-2 hover:text-red  text-lg cursor-pointer' >
                 <div className='img_listProduct_admin'>
                      <img src={record.poster[0].url} style={{width:"70px",height:"70px"}}/>
                 </div>
            </p>, 
        },

        {
            title: 'Tên ',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
             sorter: (a, b) => a.name.length - b.name.length,
             ...getColumnSearchProps('name'),
             render: (name,record) =>
             <p className='text-Gray1 d-flex items-center gap-2 hover:text-red  text-lg cursor-pointer' >
                  <div className='' >
                    <p className='title_Product_description_adMin'>{record.name}</p>
                  </div>
             </p>,
        },

        {
            title: 'Giá bán',
            dataIndex: 'price',
            key: 'price',
            width: '20%',
            sorter: (a, b) => a.price - b.price,
            ...getColumnSearchProps('price'),
            render: text =><p className=' font-medium'>{fomat.format(text)} đ  </p>,
        },

        {
              title: 'Số Lượng ',
              dataIndex: 'quantity',
              key: 'quantity',
              width: '20%',
              sorter: (a, b) => a.quantity - b.quantity,
              ...getColumnSearchProps('quantity'),
          },

          {
              title: 'Hãng',
              dataIndex: 'manufacturer',
              key: 'manufacturer',
              width: '20%',
              sorter: (a, b) => a.manufacturer.length - b.manufacturer.length,
              ...getColumnSearchProps('manufacturer'),
              render:(key)=>
                  <p className='text-Gray1 d-flex items-center gap-2 hover:text-red  text-lg cursor-pointer' >
                      <p>{key}</p>
                  </p>
          },

        {
            title: 'TrạngThái ',
            dataIndex: 'quantity',
            key: 'Status',
            ...getColumnSearchProps('Status'),
            sorter: (a, b) => a.Status.length - b.Status.length,
            sortDirections: ['descend', 'ascend'],
            render:(value)=>{
              if(value>100){
                    return <p className='bg-info text-center font-medium text-white '>Còn nhiều  </p>
              }
              else if(value<100){
                  return <p className='bg-warning text-center font-medium'>Còn ít</p>
              }
                else if(value<50){
                  return <p className='bg-danger text-center font-medium'>Gần hêt</p>
                }
                else if(value===0){
                  return <p className='bg-danger text-center font-medium'>Hết hàng</p>
                }
            }
        },

        {
              title: ()=>{return <div className='text-center'>Hành Động</div>},
              dataIndex: '',
              key: 'x',
              render: (value) => 
              <p className='text-Gray1 d-flex items-center justify-center gap-2 hover:text-red  text-lg cursor-pointer' >
                  <Button  className='btInFor_lisProduct d-flex gap-1 items-center'><span><AiOutlineEdit/> </span> Chỉnh sửa</Button>
                  <Button type='danger d-flex gap-1 items-center'><span><AiOutlineDelete/></span>Xóa</Button>
              </p>,
        },
    ];

    const data = [];
    for (let i = 0; i < totalAllListProduct.length; i++) {
     data.push({
        index: i,
        name:totalAllListProduct[i].name,
        poster:totalAllListProduct[i].poster,
        price:totalAllListProduct[i].price,
         quantity:totalAllListProduct[i].quantity,
         manufacturer:totalAllListProduct[i].key,
      });
    }

    return (
    <div className='group-product-admin head-title-admin'>
        <div className='group-product-admin-title group-headTileAdmin d-flex items-center '>
        <img src="https://cdn-icons-png.flaticon.com/128/1524/1524855.png" className='img_menu_admin_product bg-white shadow-md p-2 rounded-md'/> 
        <div className='group-product-admin-title-search group-heade-tileAdmin-search'>
            <h5 className='cl-titleProduct'>Quản Lý Sản Phẩm  </h5>
            <p className='text-Gray1'>Danh Sách Sản Phẩm    </p>
        </div>
    </div>
    <div className='p-3 group-product-admin-addProduct-content  content_title_adMinAll shadow-md'>
         <h6 className='text-start cl-titleProduct mt-2  mb-5'>THÔNG TIN Danh Sách Sản Phẩm   </h6>
         <div className='group-product-admin-addProduct-content-form'>
          {listProductByPage&&<Table className='tableListProduct' columns={columns} dataSource={!totalAllListProduct?[]:data} />}
         </div>
    </div>
    </div>
    );
}

export default ListProduct;