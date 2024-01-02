import React,{useEffect,useRef,useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch,useSelector} from 'react-redux'  
import {GetAllCarts} from '../../../../featuresReducer/Admin/CartAdmin/pathApi'
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';

import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import './index.css'
import {Link} from 'react-router-dom'
PushChange.propTypes = {
    
};

function PushChange(props) {
    const listAllCartAdmin=useSelector(state=>state.cartAdmin.dataCart);
console.log(listAllCartAdmin)
    const dispatch=useDispatch();
    const fomat=new Intl.NumberFormat('vn')

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
    useEffect(() => {

        dispatch(GetAllCarts())
      
    }, [])

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
        title: render => <div className="text-center">Tên khách hàng</div>,
        dataIndex: 'poster_user',
        key: 'poster_user',
        width: '20%',
        render: (avatar,record) =>

         <p className='   cursor-pointer' >
            
             <div className='img_listProduct_admin_pushChange  gap-2 '>
                  <img src={avatar} style={{width:"50px",height:"50px"}}/> <span className='color_text_pushChangeUser'>{record.name}</span>
             </div>
        </p>, 
      },

   


    {
           title: render=> <div className='text-center'>Ngày đặt  </div>,
           dataIndex: 'timeCart',
           key: 'timeCart',
           width: '20%',
           sorter: (a, b) => a.timeCart - b.timeCart,
           ...getColumnSearchProps('timeCart'),
           render: text =><p className=' text-center'>{moment(text).format('L')}   </p>,
       },

       
       {
           title: render=> <div className='text-center'>Trạng thái   </div>,
           dataIndex: 'success',
           key: 'success',
           width: '20%',
           render:(value,record)=>{
             if(record.success===true){
                   return <p className='bg-info text-center font-medium text-white '>Đã phê duyệt thành   </p>
             }

               else if(value===false){
                 return <p className='text-center '>Đơn hàng đang chờ xử lý</p>
               }
           }
       },

 


       {
             title: ()=>{return <div className='text-center'>Hành Động</div>},
             dataIndex: '',
             key: 'x',
             render: (value,record) => 
             <p className='text-Gray1 d-flex items-center justify-center gap-2 hover:text-red  text-lg cursor-pointer' >
                 <Button  className='d-flex gap-1 items-center bg_color_btnProduct'><Link className='no-underline hv_color_detail' to={`/admin/detailPushChange/${record._id}`}>Chi tiết </Link> </Button>
                 <Button type='danger d-flex gap-1 items-center' className='font-medium'><span><AiOutlineDelete/></span>Xóa</Button>
             </p>,
       },
   ];


    
    return (
        <div>
         <div className='group-product-admin head-title-admin'>
        <div className='group-product-admin-title group-headTileAdmin d-flex items-center '>
        <img src="https://cdn-icons-png.flaticon.com/128/1524/1524855.png" className='img_menu_admin_product bg-white shadow-md p-2 rounded-md'/> 
        <div className='group-product-admin-title-search group-heade-tileAdmin-search'>
            <h5 className='cl-titleProduct'>Quản Lý Mua Hàng   </h5>
            <p className='text-Gray1'>Danh Sách Mua Hàng    </p>
        </div>
    </div>
    <div className='p-3 group-product-admin-addProduct-content  content_title_adMinAll shadow-md'>
         <h6 className='text-start cl-titleProduct mt-2  mb-5'>THÔNG TIN DANH SÁCH MUA HÀNG </h6>
         <div className='group-product-admin-addProduct-content-form'>
            
          {listAllCartAdmin&&<Table className='tableListProduct' columns={columns} dataSource={listAllCartAdmin} />}
      
         </div>
    </div>
    </div>
            
        </div>
    );
}

export default PushChange;