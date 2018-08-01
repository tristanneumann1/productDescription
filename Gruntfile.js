module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-keys.json'), // Read the file
 
    'aws_s3': {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'us-east-1',
        uploadConcurrency: 2, // 5 simultaneous uploads
        downloadConcurrency: 0 // 5 simultaneous downloads
      },
      staging: {
        options: {
          bucket: 'mormont',
          differential: true, // Only uploads the files that have changed
          gzipRename: 'ext' // when uploading a gz file, keep the original extension
        },
        files: [
          // {dest: 'app/', cwd: 'backup/staging/', action: 'download'},
          // {src: 'client/dist/bundle.js', cwd: 'copy/', action: 'copy'},
          {expand: true, src: ['./client/dist/**.js'], dest: '/', action: 'upload'},
          // {expand: true, cwd: 'dist/staging/styles/', src: ['**'], dest: 'app/styles/'},
          // {dest: 'src/app', action: 'delete'},
        ]
      },
      // production: {
      //   options: {
      //     bucket: 'mormont',
      //     params: {
      //       ContentEncoding: 'gzip' // applies to all the files!
      //     },
      //     mime: {
      //       'dist/assets/production/LICENCE': 'text/plain'
      //     }
      //   },
      //   files: [
      //     {expand: true, cwd: 'dist/production/', src: ['**'], dest: 'app/'},
      //     {expand: true, cwd: 'assets/prod/large', src: ['**'], dest: 'assets/large/', stream: true}, // enable stream to allow large files
      //     {expand: true, cwd: 'assets/prod/', src: ['**'], dest: 'assets/', params: {CacheControl: '2000'}},
      //     // CacheControl only applied to the assets folder
      //     // LICENCE inside that folder will have ContentType equal to 'text/plain'
      //   ]
      // },
      // 'clean_production': {
      //   options: {
      //     bucket: 'mormont',
      //     debug: true // Doesn't actually delete but shows log
      //   },
      //   files: [
      //     {dest: 'app/', action: 'delete'},
      //     {dest: 'assets/', exclude: '**/*.tgz', action: 'delete'}, // will not delete the tgz
      //     {dest: 'assets/large/', exclude: '**/*copy*', flipExclude: true, action: 'delete'}, // will delete everything that has copy in the name
      //   ]
      // },
      // download_production: {
      //   options: {
      //     bucket: 'my-wonderful-production-bucket'
      //   },
      //   files: [
      //     {dest: 'app/', cwd: 'backup/', action: 'download'}, // Downloads the content of app/ to backup/
      //     {dest: 'assets/', cwd: 'backup-assets/', exclude: '**/*copy*', action: 'download'}, // Downloads everything which doesn't have copy in the name
      //   ]
      // },
      // secret: {
      //   options: {
      //     bucket: 'my-wonderful-private-bucket',
      //     access: 'private'
      //   },
      //   files: [
      //     {expand: true, cwd: 'secret_garden/', src: ['*.key'], dest: 'secret/'},
      //   ]
      // }
    },
    
  });

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask('default', ['aws_s3']);

};