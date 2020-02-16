
### Useful html templates for use in the app


#### Template 1
```html
<body class="container">
  <app-root></app-root>
</body>
```

#### Template 2
```html
<div>
    <h1>User List</h1>
    <hr>
    <div class="well hoverwell thumbnail">
        <h2>{{user.name}}</h2>
        <div>Email: {{user.email}}</div>
        <div>Role: {{user.role}}</div>
        <div>Joined: {{user.dateJoined}}</div>
        <div>
            <span>Location: {{user.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{user.location.city}}, {{user.location.country}}</span>
        </div>
    </div>
</div>
```

#### Template 3
Navbar component html:
   ```html
  <div class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" >UserNet</a>
      </div>
  
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <a >All Users</a>
          </li>
          <li><a href="">Create User</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
              Users
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li >
                <a href="">User1</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="navbar-header navbar-right">
          <ul class="nav navbar-nav">
            <li>
              <a>Welcome John</a>
            </li>
          </ul>
        </div>
        <form id="searchForm"  class="navbar-form navbar-right"  >
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search Sessions" >
          </div>
          <button class="btn btn-default" >
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
  ```
  Styles to go with the above:
  ```css
  .nav.navbar-nav { font-size: 15px; }
  #searchForm { margin-right: 100px; }
  @media (max-width: 1200px) {#searchForm {display: none}}
  ```

#### Template 4
row/col divs with ngFor
   ```html
   <div>
    <h1>Users</h1>
    <hr>
    <div class="row">
        <div *ngFor="let userItem of users" class="col-md-5">
            <user-thumbnail [user]="userItem"></user-thumbnail>
        </div>
    </div>
   </div>
   ````

#### Template 5
UserDetails component template:
   ```html
   <div>
     <img [src]="user?.imageUrl" [alt]="user?.name" class="user-image">

     <div class="row">
      <div class="col-md-11">
        <h2>{{user?.name}} </h2>
      </div>
     </div>

     <div class="row">
       <div class="col-md-6">
         <div><strong>Date:</strong> {{user?.date}}</div>
         <div><strong>Time:</strong> {{user?.time}}</div>
         <div><strong>Price:</strong> ${{user?.price}}</div>
       </div>
       <div class="col-md-6">
         <address>
           <strong>Address:</strong><br />
             {{user?.location?.address}}<br />
             {{user?.location?.city}}, {{user?.location?.country}}
         </address>
       </div>
     </div>
   </div>
   ```

   Style to go with this:
   ```css
   .container { padding-left: 20px; padding-right: 20px; }
   .user-image { height: 100px; }
   ```

#### Template 6
css style for active link (add to navbar css):
   ```css
   li > a.active { color: #F97924; }
   ```


