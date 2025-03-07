using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add MVC services
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Middleware 1: End request if URL contains "/end"
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/end"))
    {
        await context.Response.WriteAsync("Request Ended Here!");
        return; // Terminates the pipeline.
    }
    await next();
});

// Middleware 2: Display "Hello1"
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/hello"))
    {
        await context.Response.WriteAsync("Hello1 Middleware\n");
    }
    await next();
});

// Middleware 3: Display "Hello2"
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/hello"))
    {
        await context.Response.WriteAsync("Hello2 Middleware\n");
    }
    await next();
});

app.UseStaticFiles(); // Serves static files (CSS, JS, images)

app.UseRouting();

// Set up default routing
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=First}/{action=Index1}/{id?}");
});


// Middleware 1: Stop if URL contains "/end"
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/end"))
    {
        await context.Response.WriteAsync("Request Ended Here!");
        return; // Terminates request pipeline
    }
    await next();
});

// Middleware 2: Display "Hello1" and "Hello2"
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/hello"))
    {
        await context.Response.WriteAsync("Hello1 Middleware\n");
    }
    await next();
});

app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/hello"))
    {
        await context.Response.WriteAsync("Hello2 Middleware\n");
    }
    await next();
});

// Static Files (Comment this to observe the effect)
app.UseStaticFiles();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=First}/{action=Index1}/{id?}");
});

app.Run();
