TheWatcher
==========
A client to server monitoring tool (*Keeps watch over its clients through the night for you.*)

[![Dependency Status](https://david-dm.org/thedoxmedia/thewatcher.svg?style=flat-square)](https://david-dm.org/thedoxmedia/thewatcher) [![Code Climate](https://img.shields.io/codeclimate/github/kabisaict/flow.svg?style=flat-square)](https://codeclimate.com/github/TheDoxMedia/thewatcher)
---

### # Setup

##### Clone the project

> **Recommendation:** Use the master branch for the best stability,
  If you wish to try an experimental / dev branch checkout be aware, there
  will be errors / incomplete functionality.

```
git clone https://github.com/TheDoxMedia/thewatcher.git
```

##### Get Dependencies

```
npm install
```

---

### # Running / Commands
> All commands starting with `node index.js`

| Desc               | Shorthand     | Full       | Arg / Options           |
|:-------------------|---------------|------------|-------------------------|
| Run Config Builder | `-s`          | `--setup`  |  `client | server`      |
| Start in mode      | `-m`          | `--mode`   |  `client | server`      |


---

### # Versions
##### 0.0.2
  - Rebuilding (Current Master/Dev Branches)

##### 0.0.1
  - Initial release.
    - Readme added!
    - Both Client and Server modes available (set in respective .json config file that's loaded in.)
    - Add and generate of clients can be performed using the `--add` mode of running thewatcher.
    - Checkins & Clients tracked via DB files.
