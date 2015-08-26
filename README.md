#JoshVR
Easily create 3D static hierarchies, experience them in VR, and share with your
friends.

##Local Development

To hack on this tool, simply install the Node dependencies:

    npm i

To run the development server for the static files and the file watchers for the build scripts:

    npm start

##Production

Do not run this in production yet, as all the `node_modules` directories are served. We will need to introduce a separate `dist/` directory with only the necessary files copied over.


##Create
Describe your scene using primitives (currently only cubes and spheres) and groups to describe a scene hierarchy.
![edit](screenshots/1.png)

Use the dynamically created controls to modify transforms on individual primitives.  Make sure to add the transform attributes in the code for the controls to be built.  Current attributes supported:

* translateX
* translateY
* translateZ
* rotateX
* rotateY
* rotateZ
* scaleX
* scaleY
* scaleZ

![prim transforms](screenshots/2.png)

or edit transforms on groups to have the transforms applied to all children in the hierarchy.
![group transforms](screenshots/3.png)

Add new primitives to the scene, and the controls will be dynamically added for listed attributes.
![](screenshots/4.png)

Place them in groups to combine transforms (ie. rotateY, then translateX, then rotateY again).
![](screenshots/5.png)

##Share
Click share to publish an anonymous gist to Github.  Github's API is limited to 60 anonymous gists created per hour per IP address.
![](screenshots/6.png)

Click the created link to view your gist.
![](screenshots/7.png)

Click "search for more" to see other demos others have created.
![](screenshots/8.png)

Click "load" to load another scene created from a friend.
![](screenshots/9.png)

Enter the URL of the RAW gist.  Make sure it's the **RAW** link from Github!  When viewing another gist, click the raw button in the top right of the source.
![](screenshots/10.png)

Click OK to have your currently scene replaced with the contents of the gist.  The scene and its controls will be rebuilt.
![](screenshots/11.png)

##Experience
Click on the canvas to enter fullscreen + pointerlock.  Plug in a VR headset, fire up Firefox, and grab the [VR add-on](http://mozvr.com/downloads/).
![](screenshots/12.png)

Move your head around, turn from side to side, roll, look up and down, and move around within the front-facing position sensor's frustum.

[**Watch this video!**<br>![](screenshots/13.png)](https://vimeo.com/136548758)

##Load scenes via URLs in the query string
To load a scene, open `http://localhost:8080/?url={url}` where `{url}`
resembles one of the following URL formats:

* http://example.com/scene.xml
* https://gist.github.com/anonymous/528f10188d08e13c92cb/
* https://gist.github.com/anonymous/528f10188d08e13c92cb/raw/cbfc338590bc9e8a54e9d00feab421d27efbc30c/joshVR.xml
* https://gist.github.com/anonymous/528f10188d08e13c92cb/raw/
* https://gist.githubusercontent.com/anonymous/528f10188d08e13c92cb/
* https://gist.githubusercontent.com/anonymous/528f10188d08e13c92cb/raw/cbfc338590bc9e8a54e9d00feab421d27efbc30c/joshVR.xml
* https://gist.githubusercontent.com/anonymous/528f10188d08e13c92cb/raw/
