import React, {Component} from 'react';


class PersonelTakip extends React.Component{
    render(){
        return(
           
  <div className="content-wrapper" style={{minHeight: '512px;'}}>
    {/* <!-- Content Header (Page header) --> */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Personel Takip</h1>
          </div>{/* <!-- /.col --> */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Personel Takip</li>
            </ol>
          </div>{/* <!-- /.col --> */}
        </div>{/* <!-- /.row --> */}
      </div>{/* <!-- /.container-fluid --> */}
    </div>
   {/*  <!-- /.content-header -->

    <!-- Main content --> */}
    <section className="content">
      <div className="container-fluid">
        {/* <!-- Small boxes (Stat box) --> */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* <!-- small box --> */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>

                <p>Toplam Personel</p>
              </div>
              <div className="icon">
                {/* <!--ikon--> */}
                <i className="fas fa-user-friends"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          {/* <!-- ./col --> */}
          <div className="col-lg-3 col-6">
            {/* <!-- small box --> */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: '20px'}}></sup></h3>

                <p>İzinli Personel</p>
              </div>
              <div className="icon">
                <i className="fas fa-user-check"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
         {/*  <!-- ./col --> */}
          <div className="col-lg-3 col-6">
           {/*  <!-- small box --> */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>

                <p>İşe Gelen Personel</p>
              </div>
              <div className="icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
         {/*  <!-- ./col --> */}
          <div className="col-lg-3 col-6">
            {/* <!-- small box --> */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>

                <p>İşe Gelmeyen Personel</p>
              </div>
              <div className="icon">
                {/* <!--ikon--> */}
                <i className="fas fa-user-times"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            {/* <!-- small box --> */}
            <div className="small-box bg-secondary">
              <div className="inner">
                <h3>65</h3>

                <p>İşe Geç Gelen Personel</p>
              </div>
              <div className="icon">
               {/*  <!--ikon--> */}
                <i className="fas fa-user-clock"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          {/* <!-- ./col --> */}
        </div>
        {/* <!-- /.row -->
        <!-- Main row --> */}
        <div className="row">
         {/*  <!-- Left col --> */}
          <section className="col-lg-7 connectedSortable ui-sortable">
            {/* <!-- Custom tabs (Charts with tabs) sales area-->
            
            <!-- /.card -->

            <!-- DIRECT CHAT -->
           

            <!-- TO DO List -->
            
            <!-- /.card --> */}
          </section>
          {/* <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)--> */}
          <section className="col-lg-5 connectedSortable ui-sortable">

           {/*  <!-- Map card -->
           
                <!-- card tools -->
               
                <!-- /.card-tools visitors--> */}
              </section></div>
              {/* 
              <!-- /.card-body--> */}
              
            </div>
           {/*  <!-- /.card -->

            <!-- solid sales graph -->
           
            <!-- /.card -->

            <!-- Calendar -->
          
            <!-- /.card --> */}
          </section>
         {/*  <!-- right col --> */}
        </div>
           
        )
    }
}
export default PersonelTakip