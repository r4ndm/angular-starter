
### Useful html templates for use in the app

1. 
```html
<body class="container">
  <app-root></app-root>
</body>
```

2.
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


   