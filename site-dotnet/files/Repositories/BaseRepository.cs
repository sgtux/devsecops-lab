using System;
using System.Data;
using Fakebook.Config;
using Npgsql;

namespace Fakebook.Repositories
{
    public abstract class BaseRepository
    {
        private readonly NpgsqlConnection _connection;

        public BaseRepository(AppConfig appConfig)
        {
            _connection = new NpgsqlConnection(appConfig.DatabaseConnectionString);
        }

        public NpgsqlDataReader Query(string sql)
        {
            if (_connection.State != ConnectionState.Open)
                _connection.Open();
            var command = _connection.CreateCommand();
            command.CommandText = sql;
            return command.ExecuteReader();
        }

        public T GetValueOrNull<T>(NpgsqlDataReader reader, string columnName)
        {
            var columnValue = reader[columnName];
            if (columnValue is DBNull)
                return default(T);
            return (T)columnValue;
        }

        public void Dispose()
        {
            if (_connection.State != ConnectionState.Closed)
                _connection.Close();
        }
    }
}